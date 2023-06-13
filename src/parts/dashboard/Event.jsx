import React from "react";
import "../../assets/style/event.css";
import CardEvent from "../../components/Card";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

let searchValue;
let filterValue;

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

  function search(value){
    searchValue = value.toLowerCase();
  }

  function filter(value){
    filterValue = value;
  }

  function drawCards(event){
    if(searchValue != null) {
      if (!event.name.toLowerCase().includes(searchValue)) {
        return (<div className="col-lg-4 " key={event.id}></div>);
      }
    }
    const dateNow = new Date();
    const dateNowMilli = dateNow.getTime();
    if(filterValue === "Upcoming") {
      const dateCheck = new Date(event["regist-start"]);
      const dateCheckMilli = dateCheck.getTime();
      if (!(dateCheckMilli > dateNowMilli)) {
        return (<div className="col-lg-4 " key={event.id}></div>);
      }
    } else if(filterValue === "Past") {
      const dateCheck = new Date(event["event-end"]);
      const dateCheckMilli = dateCheck.getTime();
      if (!(dateCheckMilli < dateNowMilli)) {
        return (<div className="col-lg-4 " key={event.id}></div>);
      }
    }
    return(
    <div className="col-lg-4 " key={event.id}>
      <CardEvent key={event.id} image={event.image} title={event.name} description={event.description} link={`/dashboard/event/${event.id}`} />
    </div> );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="tittle-page">Event</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Search handleSearch={(value) => search(value)} />
        </div>
        <div className="col">
          <Filter options={["Upcoming", "Past"]} handleFilter={(value) => filter(value)} />
        </div>
      </div>
      <div className="row">
        {fetchError && <p>fetchError</p>}
        {events && (
          <div className="row  row-gap-5 ">
            {events.map((event) => drawCards(event))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
