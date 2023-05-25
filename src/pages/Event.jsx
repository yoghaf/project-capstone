import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Event() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "transparent" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Trash Hunter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#Dashboard" style={{ color: "white" }}>
                Dashboard
              </Nav.Link>
              <Nav.Link href="#My Event" style={{ color: "white" }}>
                My Event
              </Nav.Link>
              <Nav.Link href="#Save" style={{ color: "white" }}>
                Save
              </Nav.Link>
              <Nav.Link href="#Registered" style={{ color: "white" }}>
                Registered
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Col style={{ marginTop: -100 }}>
        <img
          className="Banner.jpg"
          src="/images/jumbotron/Banner.jpg"
          alt="Banner"
          style={{ width: "100%", height: 800, backgroundSize: "cover" }}
        />
      </Col>
      <Col>
      </Col>
      <footer style={{ backgroundColor: "#D1D7E1" }} className="py-2">
        <h5 className="text-center">©2023 copyright</h5>
      </footer>
    </>
  );
}

export default Event;
