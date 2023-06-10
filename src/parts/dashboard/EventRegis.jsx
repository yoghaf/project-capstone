import React, { useState, useEffect } from "react";
import "../../assets/style/eventregis.css";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

function EventRegis() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [field, setField] = useState({
    created_at: new Date().toISOString(),
    id: 14,
    "id-event": parseInt(id),
    "id-akun": "",
    name: "",
    email: "",
    domicile: "",
    notelp: "",
  });
  const handleBack = (id) => {
    navigate(`/dashboard/event/${id}`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(field);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setField((prevState) => ({
        ...prevState,
        "id-akun": data.user.id,
      }));
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(field);

    const { data } = await supabase.from("daftar").select();
    console.log(data);
    try {
      const { error } = await supabase.from("daftar").insert(field);

      if (error) {
        alert("Terjadi kesalahan, silahkan coba lagi");
      } else {
        alert("Berhasil mendaftar");
        navigate(`/dashboard/event/${id}`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="Container">
        <div className="FormContainer">
          <div className="FormLayout">
            <div className="HeadForm">
              <button className="BackButton" onClick={() => handleBack(id)}>
                <img src="/images/content/material-symbols_arrow-back-ios-rounded.svg" alt="" />
              </button>
              <div>Rise Togheter Campaign Volunter</div>
            </div>
            <div>
              <form className="FormControl" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={field.name || ""} placeholder="Full Name" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={field.email || ""} placeholder="Email" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">No. Telepon</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="notelp" value={field.notelp || ""} placeholder="No. Telepon" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Domisili</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" name="domicile" value={field.domicile || ""} placeholder="Domisili" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Screenshot bukti share poster</label>
                  <input type="file" className="form-control" id="exampleFormControlInput1" name="poster" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Screenshot bukti install Aplikasi</label>
                  <input type="file" className="form-control" id="exampleFormControlInput1" name="aplikasi" />
                </div>
                <div className="ButtonSubmit">
                  <input type="submit" value="DAFTAR" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventRegis;
