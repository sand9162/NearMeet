import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div style={{ background: "#121212", minHeight: "100vh", color: "#f8f9fa", padding: "20px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
