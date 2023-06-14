import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import InputGroup from "react-bootstrap/InputGroup";
import "../../assets/fonts/Nunito-Bold.ttf";
import "../../assets/style/myevent.css";
import supabase from "../../config/supabaseClient";
import { Context } from "../../utils/MyContext";

function MyEvent() {
  const { field, setField, fetchCities, fetchProvince } = useContext(Context);
  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const imgUrl = process.env.REACT_APP_IMAGE_URL;
  // state user id

  // state modal show
  const [modalShow, setModalShow] = useState(false);
  // state handle id
  const [handleId, setHandleId] = useState(null);
  // state modal add
  const [showModalAdd, setShowModalAdd] = useState(false);
  // state data

  const [data, setData] = useState([]);

  // handle save event
  // const handleSaveEvent = () => {
  //   let number = data.length;
  //   setData(
  //     data.concat({
  //       id: number + 1,
  //       activity: description,
  //       audience: 0,
  //       status: "live",
  //     })
  //   );
  //   setShowModalAdd(false);
  // };

  useEffect(() => {
    // id_akun

    // fetch data myevent
    const fetchDataMyEvent = async () => {
      const id_akun = JSON.parse(sessionStorage.getItem("token")).user.id;

      const { data, error } = await supabase.from("event").select("*").eq("id_akun", id_akun);

      if (error) {
        setData([]);
        console.log(error);
      }
      if (data) {
        setData(data);
      }
    };
    fetchDataMyEvent();
  }, []);

  // handlechange
  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));

      setField((prevState) => ({
        ...prevState,
        id_akun: data.user.id,
      }));
    }

    if (type === "file") {
      setField((prevState) => ({
        ...prevState,
        [name]: e.target.files[0],
      }));
    } else {
      if (name === "province") {
        const selectedProvinceId = parseInt(value);

        const selectedProvince = province.find((item) => item.id === selectedProvinceId);

        const selectedProvinceName = selectedProvince ? selectedProvince.nama : "";

        setField((prevState) => ({
          ...prevState,
          province: selectedProvinceName,
        }));

        try {
          const data = await fetchCities(selectedProvinceId);
          setCity(data);
        } catch (error) {
          console.log(error);
        }
      } else {
        const fieldValue = type === "checkbox" ? checked : value;

        setField((prevState) => ({
          ...prevState,
          [name]: fieldValue,
        }));
      }
    }
  };

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const timestamp = Date.now();

    const eventImageName = `event/${field.id_akun}-${timestamp}`;

    try {
      const { error } = await supabase.storage.from("images").upload(eventImageName, field.image, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
      return;
    }
    const updatedField = {
      ...field,
      image: `${imgUrl}/${eventImageName}`,
    };

    try {
      const { error } = await supabase.from("event").insert(updatedField);
      if (error) {
        throw error;
      } else {
        alert("Data berhasil ditambahkan");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
    setShowModalAdd(false);
    const { data } = await supabase.from("event").select("*").eq("id_akun", updatedField.id_akun);
    setData(data);
  };

  // handle get data

  // handle delete data
  const handleDeleteMyEvent = async () => {
    const { error } = await supabase.from("event").delete().eq("id_event", handleId);
    // handleGetMyEvent(userId);
    if (error) {
      alert(error.message);
    }
    const id_akun = JSON.parse(sessionStorage.getItem("token")).user.id;
    const { data } = await supabase.from("event").select("*").eq("id_akun", id_akun);
    setData(data);

    setModalShow(false);
    setHandleId(null);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setShowModalAdd(true);
    const dataProvince = async () => {
      try {
        const data = await fetchProvince();
        setProvince(data);
      } catch (error) {
        console.log(error);
      }
    };

    dataProvince();
  };
  return (
    <div>
      <Row className="seacrhAdd mt-4">
        <Col className="me-auto ms-0" xs={10} md={10}>
          <div className="card-search">
            <Form className="search-box">
              <CiSearch className="search-icon" />
              <Form.Control type="search" icon="fa-search" placeholder="Search Event" aria-label="Search" className="search-input" />
            </Form>
          </div>
        </Col>
        <Col className="ms-auto me-0" xs={1} md={1}>
          <Button className="buttonAdd" size="sm" variant="success" onClick={handleAdd}>
            <BsPlus />
          </Button>
        </Col>
      </Row>
      <center>
        {data === [] ? (
          <Card className="w-25 mt-4 mb-4">
            <Card.Body>Tidak ada data</Card.Body>
          </Card>
        ) : (
          <div className="container-table">
            <Table bordered hover style={{ fontFamily: "Bold" }}>
              <tbody>
                <tr className="header" style={{ fontFamily: "Bold" }}>
                  <th>KEGIATAN</th>
                  <th>PESERTA</th>
                  <th>STATUS</th>
                  <th>AKSI</th>
                </tr>
                {data.map((item, i) => {
                  const startDate = new Date(item["event-start"]);
                  const endDate = new Date(item["event-end"]);
                  const currentDate = new Date();

                  let status;
                  if (currentDate >= startDate && currentDate <= endDate) {
                    status = "live";
                  } else if (currentDate > endDate) {
                    status = "finished";
                  }

                  return (
                    <tr key={i}>
                      <td align="left">
                        <Link className="text-black" to={"/dashboard/myevent/" + item.id}>
                          {item.name}
                        </Link>
                      </td>
                      <td>{item?.audience}</td>
                      {status === "live" ? (
                        <td
                          style={{
                            color: "#52AD32",
                            fontFamily: "Bold",
                          }}
                        >
                          BERLANGSUNG
                        </td>
                      ) : (
                        <td
                          style={{
                            color: "#AD3232",
                          }}
                        >
                          SELESAI
                        </td>
                      )}
                      <td>
                        <Button
                          className="deleteButton"
                          style={{ fontFamily: "Bold" }}
                          variant="danger"
                          onClick={() => {
                            setHandleId(item?.id_event);
                            setModalShow(true);
                          }}
                        >
                          DELETE
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </center>

      {/* modal delete */}
      <Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header style={{ background: "#F45252" }} closeButton onClick={() => setModalShow(false)}>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#F45252" }}>
          <h5 style={{ textAlign: "center", color: "white", fontFamily: "Bold" }}>Apakah anda yakin ingin menghapus event ini ?</h5>
          <div
            style={{
              fontFamily: "Bold",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button variant="light" size="sm" onClick={() => handleDeleteMyEvent()}>
              Ya
            </Button>{" "}
          </div>
        </Modal.Body>
      </Modal>

      {/* modal add */}
      <Modal show={showModalAdd} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton onClick={() => setShowModalAdd(false)}>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* form add event */}
          <div>
            <p className="title-addevent" style={{ fontFamily: "Bold" }}>
              ADD NEW EVENT
            </p>
            <Form style={{ fontFamily: "Bold" }} onSubmit={handleSubmit}>
              {/* name event */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Name of Event</Form.Label>
                <Form.Control className="w-100" placeholder="" name="name" onChange={handleChange} />
              </Form.Group>
              {/* registration */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Regitration</Form.Label>
                <div className="d-flex align-items-center flex-grow-1">
                  <Form.Control className="formDate w-45" type="date" name="regist-start" onChange={handleChange} />
                  <p style={{ marginLeft: 16, marginRight: 16 }}>-</p>
                  <Form.Control className="formDate w-45" type="date" name="regist-end" onChange={handleChange} />
                </div>
              </Form.Group>
              {/* date */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Date</Form.Label>
                <div className="d-flex align-items-center flex-grow-1">
                  <Form.Control className="formDate w-45" type="date" name="event-start" onChange={handleChange} />
                  <p style={{ marginLeft: 16, marginRight: 16 }}>-</p>
                  <Form.Control className="formDate w-45" type="date" name="event-end" onChange={handleChange} />
                </div>
              </Form.Group>
              {/* link image */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Upload Cover Image</Form.Label>
                <input className="image-button" type="file" id="image" name="image" onChange={handleChange} />
              </Form.Group>
              {/* description */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">Description</Form.Label>
                <Form.Control className="w-100" placeholder="" as="textarea" rows={3} name="description" onChange={handleChange} />
              </Form.Group>
              {/* province */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">City</Form.Label>
                <Form.Select className="w-100" placeholder="" name="province" onChange={handleChange}>
                  <option>Select Province</option>
                  {province.map((item, i) => {
                    return (
                      <option key={i} value={item.id}>
                        {item?.nama}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              {/* city */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">City</Form.Label>
                <Form.Select className="w-100" placeholder="" name="city" onChange={handleChange}>
                  <option>Select city</option>
                  {city.map((item) => {
                    return <option key={item.id}>{item?.nama}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              {/* location */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">Location</Form.Label>
                <Form.Control className="w-100" placeholder="" as="textarea" rows={3} name="location" onChange={handleChange} />
              </Form.Group>
              {/* Link invite Group */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Link invite Group</Form.Label>
                <Form.Control className="w-100" placeholder="" name="link-invite" onChange={handleChange} />
              </Form.Group>
              {/* button add new image */}
              <Button variant="secondary" className="w-100 mb-4 mt-2">
                SELECT IMAGE INPUT
              </Button>{" "}
              {/* Checkbox */}
              <Form.Group className="checkbox-group align-items-center mb-2 mt-2">
                <InputGroup className="checkbox mb-3 ms-1">
                  <InputGroup.Checkbox className="mr-5" aria-label="Checkbox for following text input" name="poster" onChange={handleChange} />
                  <Form.Label className="label-checkbox  ">Share Poster</Form.Label>
                </InputGroup>
                <InputGroup className="checkbox mb-3 ms-1">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" name="payment" onChange={handleChange} />
                  <Form.Label className="label-checkbox ">Bukti Pembayaran</Form.Label>
                </InputGroup>
                <InputGroup className="checkbox mb-3 ms-1">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" name="follow" onChange={handleChange} />
                  <Form.Label className="label-checkbox ">Bukti Screenshot Follow</Form.Label>
                </InputGroup>
              </Form.Group>
              {/* button save */}
              <Button variant="success" className="w-100 mb-4 mt-2" type="submit">
                {loading ? "Loading..." : "Create Event"}
              </Button>{" "}
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyEvent;
