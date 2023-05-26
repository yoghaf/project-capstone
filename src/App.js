import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import RegisteredEvent from "./parts/dashboard/RegisteredEvent";
import Event from "./parts/dashboard/Event";
import SaveEvent from "./parts/dashboard/SaveEvent";
import News from "./parts/dashboard/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/dashboard/" element={<Dashboard />}>
        <Route index element={<Event />} />
        <Route path="registeredevent" element={<RegisteredEvent />} />
        <Route path="news" element={<News />} />
        <Route path=":id/myevent" element={<Dashboard />} />
        <Route path="save" element={<SaveEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
