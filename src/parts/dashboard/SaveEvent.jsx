import React from "react";
import CardEvent from "../../components/Card";

function Event() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="tittle-page">Saved Event</h1>
        </div>
      </div>

      <div className="row">
        <div className="row  row-gap-5 ">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-lg-4 " key={index}>
              <CardEvent key={index} image="https://via.placeholder.com/500" title="Event Name" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." link="/dashboard/1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;