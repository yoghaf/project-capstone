import React from "react";
import "../../assets/style/eventregis.css";
import { useNavigate } from "react-router-dom";
function EventRegis() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="Container">
        <div className="FormLayout">
          <div className="HeadForm">
            <button className="BackButton" onClick={handleBack}>
              <img src="/images/content/material-symbols_arrow-back-ios-rounded.svg" alt="" />
            </button>
            <div>Rise Togheter Campaign Volunter</div>
          </div>
          <div>
            <form className="FormControl">
              <div className="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">No. Telepon</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="No. Telepon" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Domisili</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Domisili" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Screenshot bukti share poster</label>
                <input type="file" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Screenshot bukti install Aplikasi</label>
                <input type="file" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="ButtonSubmit">
                <input type="submit" value="DAFTAR" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventRegis;
