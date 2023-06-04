import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LuTrash } from "react-icons/lu";
import "../../assets/style/myevent.css";
import '../../assets/fonts/Nunito-Bold.ttf'

function MyEvent() {
  const [modalShow, setModalShow] = useState(false);
  // state handle id
  const [handleId, setHandleId] = useState(null);
  // state modal add
  const [showModalAdd, setShowModalAdd] = useState(false);
  // state data
  const [nameEvent, setNameEvent] = useState("");
  // state regis
  const [dateRegisStart, setDateRegisStart] = useState(null);
  const [dateRegisEnd, setDateRegisEnd] = useState(null);
  // state date
  const [startDate, setStartDate] = useState(new Date());
  const [endData, setEndDate] = useState(new Date());
  // state link
  const [link, setLink] = useState("");
  // state description
  const [description, setDescription] = useState("");
  // state city
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([
    {
      id: 1,
      title: "Bogor",
    },
    {
      id: 2,
      title: "Jakarta",
    },
    {
      id: 3,
      title: "Bandung",
    },
  ]);
  // state location
  const [location, setLocation] = useState("");
  // state link group
  const [linkGroup, setLinkGroup] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      activity: "Rise Together Campaign Volunteer",
      audience: 5,
      status: "live",
    },
    {
      id: 2,
      activity: "Rise Together Campaign Volunteer",
      audience: 5,
      status: "done",
    },
    {
      id: 3,
      activity: "Rise Together Campaign Volunteer",
      audience: 5,
      status: "done",
    },
    {
      id: 4,
      activity: "Rise Together Campaign Volunteer",
      audience: 5,
      status: "live",
    },
    {
      id: 5,
      activity: "Rise Together Campaign Volunteer",
      audience: 5,
      status: "live",
    },
    {
      id: 6,
      activity: "Rise Together Campaign Volunteer",
      audience: 5,
      status: "live",
    },
  ]);

  // handle save event
  const handleSaveEvent = () => {
    let number = data.length;
    setData(
      data.concat({
        id: number + 1,
        activity: description,
        audience: 0,
        status: "live",
      })
    );
    setShowModalAdd(false);
  };

  return (
    <div>
      <Row className="mt-4">
        <Col xs={12} md={8}>
          <div className="card-search">
            <Form className="search-box">
              <CiSearch className="search-icon" />
              <Form.Control
                type="search"
                icon="fa-search"
                placeholder="Search Event"
                aria-label="Search"
                className="search-input"
              />
            </Form>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <Button
            className="button"
            size="sm"
            variant="success"
            onClick={() => setShowModalAdd(true)}
          >
            <BsPlus />
          </Button>
        </Col>
      </Row>
      <center>
        <div className="container-table">
          <Table bordered hover style={{fontFamily: 'Bold'}}>
            <thead>
              <tr className="header" style={{fontFamily: 'Bold'}}>
                <th>KEGIATAN</th>
                <th>PESERTA</th>
                <th>STATUS</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr>
                    <td align="left">{item.activity}</td>
                    <td>{item?.audience}</td>
                    {item?.status == "live" ? (
                      <td style={{
                        color: '#52AD32',
                        fontFamily: 'Bold'
                      }}>BERLANGSUNG</td>
                    ) : (
                      <td style={{
                        color: '#AD3232'
                      }}>SELESAI</td>
                    )}
                    <td>
                      <Button
                        style={{fontFamily: 'Bold'}}
                        variant="danger"
                        onClick={() => {
                          setHandleId(i);
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
      </center>

      {/* modal delete */}
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ background: "#F45252" }}
          closeButton
          onClick={() => setModalShow(false)}
        >
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#F45252" }}>
          <h5 style={{ textAlign: "center", color: "white", fontFamily: 'Bold' }}>
            Apakah anda yakin ingin menghapus event ini ?
          </h5>
          <div
            style={{
              fontFamily: 'Bold',
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              variant="light"
              size="sm"
              onClick={() => {
                let newData = [...data]
                newData.splice(handleId, 1)
                setData(newData)
                setModalShow(false);
                setHandleId(null);
              }}
            >
              Ya
            </Button>{" "}
          </div>
        </Modal.Body>
      </Modal>

      {/* modal add */}
      <Modal
        show={showModalAdd}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => setShowModalAdd(false)}>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* form add event */}
          <div>
            <p className="title-addevent" style={{fontFamily: 'Bold'}}>ADD NEW EVENT</p>
            <Form style={{fontFamily: 'Bold'}}>
              {/* name event */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Name of Event</Form.Label>
                <Form.Control
                  className="w-100"
                  placeholder=""
                  value={nameEvent}
                  onChange={(v) => setNameEvent(v.target.value)}
                />
              </Form.Group>
              {/* registration */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Regitration</Form.Label>
                <div className="d-flex align-items-center flex-grow-1">
                  <Form.Control
                    className="w-45"
                    type="date"
                    value={dateRegisStart == null ? new Date() : dateRegisStart}
                    onChange={(v) => setDateRegisStart(v.target.value)}
                  />
                  <p style={{ marginLeft: 16, marginRight: 16 }}>-</p>
                  <Form.Control
                    className="w-45"
                    type="date"
                    value={dateRegisEnd == null ? new Date() : dateRegisEnd}
                    onChange={(v) => setDateRegisEnd(v.target.value)}
                  />
                </div>
              </Form.Group>
              {/* date */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Date</Form.Label>
                <div className="d-flex align-items-center flex-grow-1">
                  <Form.Control
                    className="w-45"
                    type="date"
                    value={startDate}
                    onChange={(v) => setStartDate(v.target.value)}
                  />
                  <p style={{ marginLeft: 16, marginRight: 16 }}>-</p>
                  <Form.Control
                    className="w-45"
                    type="date"
                    value={endData}
                    onChange={(v) => setEndDate(v.target.value)}
                  />
                </div>
              </Form.Group>
              {/* link image */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Link image</Form.Label>
                <Form.Control
                  className="w-100"
                  placeholder=""
                  value={link}
                  onChange={(v) => setLink(v.target.value)}
                />
              </Form.Group>
              {/* description */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">Description</Form.Label>
                <Form.Control
                  className="w-100"
                  placeholder=""
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(v) => setDescription(v.target.value)}
                />
              </Form.Group>
              {/* city */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">City</Form.Label>
                <Form.Select
                  className="w-100"
                  placeholder=""
                  value={city}
                  onChange={(v) => setCity(v.target.value)}
                >
                  <option>Select city</option>
                  {cities.map((item, i) => {
                    return <option value={item?.title}>{item?.title}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              {/* location */}
              <Form.Group className="d-flex mb-2 mt-2">
                <Form.Label className="w-25">Location</Form.Label>
                <Form.Control
                  className="w-100"
                  placeholder=""
                  as="textarea"
                  rows={3}
                  value={location}
                  onChange={(v) => setLocation(v.target.value)}
                />
              </Form.Group>
              {/* Link invite Group */}
              <Form.Group className="d-flex align-items-center mb-2 mt-2">
                <Form.Label className="w-25">Link invite Group</Form.Label>
                <Form.Control
                  className="w-100"
                  placeholder=""
                  value={linkGroup}
                  onChange={(v) => setLinkGroup(v.target.value)}
                />
              </Form.Group>
              {/* button add new image */}
              <Button variant="secondary" className="w-100 mb-4 mt-2">
                <BsPlus />
                ADD NEW IMAGE INPUT
              </Button>{" "}
              {/* button image poster */}
              <div className="d-flex align-items-center mt-2 mb-2">
                <LuTrash />
                <Card body style={{ marginLeft: 16 }} className="size-sm">
                  Bukti Share Poster
                </Card>
              </div>
              <div className="d-flex align-items-center mt-2 mb-2">
                <LuTrash />
                <Card body style={{ marginLeft: 16 }} className="size-sm">
                  Bukti Share Poster
                </Card>
              </div>
              {/* button save */}
              <Button
                variant="success"
                className="w-100 mb-4 mt-2"
                onClick={() => handleSaveEvent()}
              >
                SIMPAN
              </Button>{" "}
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyEvent;
