import React, { useState, useEffect } from "react";
import "../../assets/style/eventregis.css";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";

function EventRegis() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imgUrl = process.env.REACT_APP_IMAGE_URL;
  const [event, setEvent] = useState(null);

  const [field, setField] = useState({
    created_at: new Date().toISOString(),
    id_event: id,
    id_akun: "",
    name: "",
    notelp: "",
    domicile: "",
    email: "",
    poster_img_url: null,
    payment_img_url: null,
    follow_img_url: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
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
      let datas = JSON.parse(sessionStorage.getItem("token"));

      setField((prevState) => ({
        ...prevState,
        id_akun: datas.user.id,
      }));
    }

    const fetchEvent = async () => {
      const { data, error } = await supabase.from("event").select().eq("id_event", id);

      if (error) {
        alert("Could not fetch the events");
        setEvent(null);
        console.log(error);
      }
      if (data) {
        setEvent(data);
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const timestamp = Date.now();
    const posterImageName = `poster/${field.id_akun}-${timestamp}`;
    const followImageName = `follow/${field.id_akun}-${timestamp}`;
    const paymentImageName = `payment/${field.id_akun}-${timestamp}`;

    console.log(field);
    if (field.poster_img_url !== null) {
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
        setIsLoading(false);
        return;
      }
    }
    if (field.follow_img_url !== null) {
      try {
        const { error } = await supabase.storage.from("images").upload(followImageName, field.follow_img_url, {
          cacheControl: "3600",
          upsert: false,
        });
        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
        setIsLoading(false);
        return;
      }
    }

    if (field.payment_img_url !== null) {
      try {
        const { error } = await supabase.storage.from("images").upload(paymentImageName, field.payment_img_url, {
          cacheControl: "3600",
          upsert: false,
        });
        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
        setIsLoading(false);
        return;
      }
    }
    const updatedField = {
      ...field,
      poster_img_url: field.poster_img_url !== null ? `${imgUrl}/${posterImageName}` : null,
      follow_img_url: field.follow_img_url !== null ? `${imgUrl}/${followImageName}` : null,
      payment_img_url: field.payment_img_url !== null ? `${imgUrl}/${paymentImageName}` : null,
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="Container">
        <div className="FormContainer">
          <div className="FormLayout">
            <div className="HeadForm">
              <button className="BackButton" onClick={handleBack}>
                <img src="/images/content/material-symbols_arrow-back-ios-rounded.svg" alt="" />
              </button>
              <div>Rise Togheter Campaign Volunter</div>
            </div>
            <div>
              <form className="FormControl" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1_name">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1_name" name="name" value={field.name || ""} placeholder="Full Name" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1_email">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1_email" name="email" value={field.email || ""} placeholder="Email" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1_notelp">No. Telepon</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1_notelp" name="notelp" value={field.notelp || ""} placeholder="No. Telepon" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1_domicile">Domisili</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1_domicile" name="domicile" value={field.domicile || ""} placeholder="Domisili" onChange={handleChange} />
                </div>

                {event && event.length > 0 && event[0].poster ? (
                  <div className="form-group">
                    <label htmlFor="poster_img_url">Screenshot bukti share poster</label>
                    <input type="file" className="form-control" id="poster_img_url" name="poster_img_url" accept="image/*" onChange={handleChange} />
                  </div>
                ) : (
                  <div></div>
                )}
                {event && event.length > 0 && event[0].follow ? (
                  <div className="form-group">
                    <label htmlFor="follow_img_url">Screenshot bukti Follow</label>
                    <input type="file" className="form-control" id="follow_img_url" name="follow_img_url" accept="image/*" onChange={handleChange} />
                  </div>
                ) : (
                  <div></div>
                )}
                {event && event.length > 0 && event[0].payment ? (
                  <div className="form-group">
                    <label htmlFor="payment_img_url">Screenshot bukti Pembayaran</label>
                    <input type="file" className="form-control" id="payment_img_url" name="payment_img_url" accept="image/*" onChange={handleChange} />
                  </div>
                ) : (
                  <div></div>
                )}
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
