import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import RegisteredEvent from "./parts/dashboard/RegisteredEvent";
import Event from "./parts/dashboard/Event";
import SaveEvent from "./parts/dashboard/SaveEvent";
import MyEvent from "./parts/dashboard/MyEvent";
import Detail from "./parts/dashboard/Detail";
import EventRegis from "./parts/dashboard/EventRegis";
import DetailMyEvent from "./parts/dashboard/DetailMyEvent";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/signup" element={<SignUp />} />
      {token ? (
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route index element={<Event />} />
          <Route path="registeredevent" element={<RegisteredEvent />} />
          <Route path="myevent" element={<MyEvent />} />
          <Route path="myevent/:id" element={<DetailMyEvent />} />
          <Route path="save" element={<SaveEvent />} />
          <Route path="event/:id" element={<Detail />} />
          <Route path="eventregister/:id" element={<EventRegis />} />
        </Route>
      ) : (
        ""
      )}
    </Routes>
  );
}

export default App;
