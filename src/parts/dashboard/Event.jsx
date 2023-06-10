import React from "react";
import "../../assets/style/event.css";
import CardEvent from "../../components/Card";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

function Event() {
  const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const { data, error } = await supabase.from("event").select();

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
          <h1 className="tittle-page">Event</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Search handleSearch={(value) => console.log(value)} />
        </div>
        <div className="col">
          <Filter options={["Upcoming", "Past"]} handleFilter={(value) => console.log(value)} />
        </div>
      </div>
      <div className="row">
        {fetchError && <p>fetchError</p>}
        {events && (
          <div className="row  row-gap-5 ">
            {events.map((event) => (
              <div className="col-lg-4 " key={event.id_event}>
                <CardEvent key={event.id_event} image={event.image} title={event.name} description={event.description} link={`/dashboard/event/${event.id_event}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
