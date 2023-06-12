import React, { useState, useEffect } from "react";
import "../../assets/style/eventregis.css";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

function EventRegis() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imgUrl = process.env.REACT_APP_IMAGE_URL;

  const [field, setField] = useState({
    created_at: new Date().toISOString(),
    id_event: id,
    id_akun: "",
    name: "",
    notelp: "",
    domicile: "",
    email: "",
    poster_img_url: null,
    app_img_url: null,
  });

  const [isLoading, setIsLoading] = useState(false); // State untuk indikator loading

  const handleBack = (id) => {
    navigate(`/dashboard/event/${id}`);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setField((prevState) => ({
        ...prevState,
        [name]: e.target.files[0],
      }));
    } else {
      setField((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setField((prevState) => ({
        ...prevState,
        id_akun: data.user.id,
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Set isLoading menjadi true saat proses pengiriman data dimulai

    const timestamp = Date.now();
    const posterImageName = `poster/${field.id_akun}-${timestamp}-${field.poster_img_url.name}`;
    const appImageName = `app/${field.id_akun}-${timestamp}-${field.app_img_url.name}`;

    try {
      const { error } = await supabase.storage.from("images").upload(posterImageName, field.poster_img_url, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
      setIsLoading(false); // Set isLoading menjadi false jika terjadi error
      return;
    }

    try {
      const { error } = await supabase.storage.from("images").upload(appImageName, field.app_img_url, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
      setIsLoading(false); // Set isLoading menjadi false jika terjadi error
      return;
    }

    const updatedField = {
      ...field,
      poster_img_url: `${imgUrl}/${posterImageName}`,
      app_img_url: `${imgUrl}/${appImageName}`,
    };

    setField(updatedField);

    try {
      const { error } = await supabase.from("daftar").insert(updatedField);
      if (error) {
        throw error;
      } else {
        alert("Data berhasil ditambahkan");
        navigate(`/dashboard/event/${id}`);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false); // Set isLoading menjadi false setelah proses pengiriman data selesai (baik berhasil atau gagal)
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
                  <label htmlFor="poster_img_url">Screenshot bukti share poster</label>
                  <input type="file" className="form-control" id="poster_img_url" name="poster_img_url" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="app_img_url">Screenshot bukti install Aplikasi</label>
                  <input type="file" className="form-control" id="app_img_url" name="app_img_url" onChange={handleChange} />
                </div>
                <div className="ButtonSubmit">
                  <input type="submit" value={`${isLoading ? "LOADING..." : "DAFTAR"}`} disabled={isLoading} />
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
