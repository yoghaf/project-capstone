import React from "react";
import Footer from "../parts/Footer";
import Nav from "../parts/Nav";
import Event from "../parts/dashboard/Event";
import Hero from "../parts/dashboard/Hero";
function Dashboard() {
  return (
    <>
      <Nav />
      <Hero />
      <Event />
      <Footer />
    </>
  );
}

export default Dashboard;
