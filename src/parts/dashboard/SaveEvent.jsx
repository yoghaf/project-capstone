import React from "react";
import CardEvent from "../../components/Card";
import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

function Event() {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);
  let data_login = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    const fetchEvent = async () => {
      const { data, error } = await supabase.from("save").select(`id_event, event ( id_event, name,image, description )`).eq("id_akun", data_login.session.user.id)

      if (error) {
        setFetchError("Could not fetch the events");
        setEvents(null);
        console.log(error);
      }
      if (data) {
        setEvents(data);
        setFetchError(null);
      }
    };

    fetchEvent();
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="tittle-page">Saved Event</h1>
        </div>
      </div>

      <div className="row">
        <div className="row  row-gap-5 ">
          {!events? <p>Tidak ada event yang disimpan</p>
          :events.map((event) => (
            <div className="col-lg-4 " key={event.event.id_event}>
              <CardEvent key={event.event.id_event} image={event.event.image} title={event.event.name} description={event.event.description} link={`/dashboard/event/${event.event.id_event}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;