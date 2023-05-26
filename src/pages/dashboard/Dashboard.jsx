import React from "react";
import Navigation from "../../components/dashboard/Nav";
import Hero from "../../components/dashboard/Hero";
import Footer from "../../components/dashboard/Footer";
import { Outlet } from "react-router-dom";

function DashboardRegistered() {
  return (
    <>
      <Navigation />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
}

export default DashboardRegistered;
