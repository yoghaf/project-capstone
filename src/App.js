import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
