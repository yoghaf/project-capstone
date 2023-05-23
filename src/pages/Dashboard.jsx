import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Event from "../parts/dashboard/Event";
import Hero from "../parts/dashboard/Hero";

function Dashboard() {
  const navigation = {
    dashboard: ["Dashboard", "My Event", "Save", "Registered"],

    visitor: ["Home", "About us", "Contact"],
  };

  return (
    <>
      <Nav navigation={navigation} />
      <Hero />
      <Event />
      <Footer />
    </>
  );
}

export default Dashboard;
