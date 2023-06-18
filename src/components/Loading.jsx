// credit Bootstrap 5.2
import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "50vh" }}>
      <Spinner animation="border" role="status">
        <span className="sr-only" style={{ fontSize: "24px" }}>
          Loading...
        </span>
      </Spinner>
    </div>
  );
}

export default Loading;
