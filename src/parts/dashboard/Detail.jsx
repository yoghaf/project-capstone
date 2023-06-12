import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../assets/style/detail.css";
import supabase from "../../config/supabaseClient";

function Detail() {
  const [fetchError, setFetchError] = useState(null);

  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEvent = async () => {
      const { data, error } = await supabase.from("event").select().eq("id_event", id);

      if (error) {
        setFetchError("Could not fetch the events");
        setEvent(null);
        console.log(error);
      }
      if (data) {
        setEvent(data);

        setFetchError(null);
      }
    };

    fetchEvent();
  }, [id]);
  const handleClick = (id) => {
    navigate(`/dashboard/eventregister/${id}`);
  };

  return (
    <>
      <div className="col box-space">
        <div className="box">
          {fetchError && <p>fetchError</p>}
          {event && (
            <div className="col">
              <div className="row title-layout box-space-h">
                <h1 className="event-title">
                  <Link className="back-button" to="../"></Link>
                  {event[0].name}
                </h1>
              </div>
              <div className="row box-space-h">
                <div className="date-image">
                  <p className="text date">Registration {event[0]["regist-start"]}</p>
                </div>
                <div className="date-image">
                  <p className="text date">Date Event {event[0]["event-start"]}</p>
                </div>
              </div>
              <div className="row" style={{ padding: "25px 68px" }}>
                <p className="text" style={{ fontSize: "16px" }}>
                  {event[0].description}
                </p>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <ol className="list-ol">
                    <p className="text">Langkah Sebelum Mendaftar</p>
                    <li>
                      <p className="text">bukti share poster</p>
                    </li>
                    <li>
                      <p className="text">bukti install aplikasi</p>
                    </li>
                  </ol>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <ol className="list-ol">
                    <p className="text">Langkah Setelah Mendaftar</p>
                    <li>
                      <p className="text">bergabung dengan grup sosial media</p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row box-space-h" style={{ padding: "0 20%" }}>
                <div className="row button-area" style={{ padding: "0" }}>
                  <div className="button-area" style={{ padding: "5px", width: "90%" }}>
                    <button id="register" className="text button-register" onClick={() => handleClick(event[0].id_event)}>
                      DAFTAR
                    </button>
                  </div>
                  <div className="button-area" style={{ padding: "5px", width: "10%" }}>
                    <button id="bookmark" className="text button-register button-bookmark"></button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Detail;
