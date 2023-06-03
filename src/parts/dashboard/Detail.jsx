import React from "react";
import { Link } from "react-router-dom";
import '../../assets/style/detail.css';

function Detail() {
  return (
    <>
    <div className="col box-space">
      <div className="box">
        <div className="col">
          <div className="row title-layout box-space-h">
            <h1 className="event-title">
              <Link className="back-button" to="../"></Link>
              Rise Together Campaign Volunteer
            </h1>
          </div>
          <div className="row box-space-h">
            <div className="date-image"><p className="text date">24 Mei 2023</p></div>
          </div>
          <div className="row" style={{padding: "25px 68px"}}>
            <p className="text" style={{fontSize: "16px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="row" style={{paddingTop: "10px"}}>
              <ol className="list-ol"><p className="text">Langkah Sebelum Mendaftar</p>
                <li><p className="text">bukti share poster</p></li>
                <li><p className="text">bukti install aplikasi</p></li>
              </ol>
            </div>
            <div className="row" style={{paddingTop: "10px"}}>
              <ol className="list-ol"><p className="text">Langkah Setelah Mendaftar</p>
                <li><p className="text">bergabung dengan grup sosial media</p></li>
              </ol>
            </div>
          </div>
          <div className="row box-space-h" style={{padding: "0 20%"}}>
            <div className="row button-area" style={{padding: "0"}}>
              <div className="button-area" style={{padding: "5px", width: "90%"}}><button id="register" className="text button-register">DAFTAR</button></div>
              <div className="button-area" style={{padding: "5px", width: "10%"}}><button id="bookmark" className="text button-register button-bookmark"></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default  Detail;