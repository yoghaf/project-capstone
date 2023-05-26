import React from "react";

import Footer from "../../components/dashboard/Footer";
import Event from "../../parts/dashboard/Event";
import Navigation from "../../components/dashboard/Nav";
import Hero from "../../components/dashboard/Hero";

function Dashboard() {
  return (
    <>
      <Navigation />
      <Hero />
      <Event />
      <Footer />
    </>
  );
}

export default Dashboard;
