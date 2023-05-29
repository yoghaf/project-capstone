import "./App.css";
import React from "react";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/" element={<Dashboard />}>
        <Route index element={<Event />} />
        <Route path="registeredevent" element={<RegisteredEvent />} />
        <Route path="myevent" element={<MyEvent />} />
        <Route path="save" element={<SaveEvent />} />
        <Route path=":id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
