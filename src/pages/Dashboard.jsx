import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Event from "./Event";

function Dashboard() {
  const navigation = {
    dashboard: ["Dashboard", "My Event", "Save", "Registered"],

    visitor: ["Home", "About us", "Contact"],
  };

  return (
    <>
      <Nav navigation={navigation} />
      <Event />
      <Footer />
    </>
  );
}

export default Dashboard;
