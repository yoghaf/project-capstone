import React from "react";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import Search from "../../components/Search";

function Event() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>Event</h1>
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
        <div className="row  row-gap-5 ">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col-lg-4 ">
              <Card key={index} image="https://via.placeholder.com/500" title="Event Name" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." link="/event/1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
