import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../assets/style/detail.css";
import supabase from "../../config/supabaseClient";

function Detail() {
  const [fetchError, setFetchError] = useState(null);
  const [like, setLike] = useState(false);
  const [event, setEvent] = useState(null);
  const [id_save, setIdSave] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  let data_login = JSON.parse(sessionStorage.getItem("token"));
  const [registered, setIdRegistered] = useState(null);
  
  useEffect(() => {
    const fetchEvent = async () => {
      const  event_liked  = await supabase.from("save").select(`id_event, id_save`).eq("id_akun", data_login.session.user.id);
      const registered_event = await supabase.from("daftar").select().eq("id_akun", data_login.session.user.id).eq("id_event", id);
      const { data, error } = await supabase.from("event").select().eq("id_event", id);
      

      if (error) {
        setFetchError("Could not fetch the events");
        setEvent(null);
        console.log(error);
      }
      if (data) {
        setEvent(data)
        if(event_liked){
          event_liked.data.forEach((liked) => {
            if(liked.id_event === data[0].id_event){
              setLike(true);
              setIdSave(liked.id_save)
              console.log(like);
            };
          })
        }

        if(registered_event.data.length>0){  
          setIdRegistered(registered_event.data)
        }
        setFetchError(null);
      }
      
    };

    fetchEvent();
    

  }, [data_login.session.user.id, id, id_save, like]);

  function ButtonBookmark ({button, like, id_event, id_save}){
    const handleBokmark = async (like,id_save) => {
      console.log(`like= ${like} dan id event= ${id_event}`)
      if(like){
        try {
          const { error } = await supabase.from('save').delete().eq('id_save', id_save)
          if (error) {
            throw error;
          } else {
            console.log(`Event Berhasil Dihapus dari Save`)
            setLike(false);
          }
        } catch (error) {
          alert(error.message);
        } 
      }
  
      if(!like){
        setLike(true);
        try {
          const { error } = await supabase.from("save").insert({ id_event: id_event, id_akun: data_login.session.user.id });
          if (error) {
            throw error;
          } else {
            setIdSave("")
            console.log(`Event Berhasil Disimpan `)
          }
        } catch (error) {
          alert(error.message);
        } 
      }
      
    };
  
    return <button id={button} className="text button-register button-bookmark" onClick={() => handleBokmark(like, id_save) } ></button>
  }

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
                    {registered?<button id="register" className="text button-register" >
                      SUDAH TERDAFTAR
                      </button>
                      :
                      <button id="register" className="text button-register" onClick={() => handleClick(event[0].id_event)}>
                        DAFTAR
                      </button>
                    }
                  </div>
                  <div className="button-area" style={{ padding: "5px", width: "10%" }}>
                    <ButtonBookmark button={like?"bookmarked":"bookmark"} like={like} id_event={event[0].id_event} id_save={id_save}/>
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
