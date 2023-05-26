import React from "react";
import Navigation from "../../components/dashboard/Nav";
import Hero from "../../components/dashboard/Hero";
import RegisteredEvent from "../../parts/dashboard/RegisteredEvent";
import Footer from "../../components/dashboard/Footer";

function DashboardRegistered() {
  return (
    <>
      <Navigation />
      <Hero />
      <RegisteredEvent />
      <Footer />
    </>
  );
}

export default DashboardRegistered;
