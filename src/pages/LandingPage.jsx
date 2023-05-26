import React from "react";
import { Jumbotron1, Jumbotron2, Jumbotron3, Jumbotron4 } from "../components/landingpage/Jumbotorn";
import CollapsibleExample from "../components/landingpage/Navbar-landing";

function LandingPage() {
  return (
    <>
      <CollapsibleExample />
      <Jumbotron1 />
      <Jumbotron2 />
      <Jumbotron3 />
      <Jumbotron4 />
    </>
  );
}

export default LandingPage;
