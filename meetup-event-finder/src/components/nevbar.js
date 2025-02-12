import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#1a1a1a", padding: "15px", borderRadius: "5px", display: "flex", justifyContent: "center" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0, margin: 0 }}>
        <li><Link to="/" style={{ color: "#f8f9fa", textDecoration: "none", fontSize: "18px", fontWeight: "bold" }}>Home</Link></li>
        <li><Link to="/create-event" style={{ color: "#f8f9fa", textDecoration: "none", fontSize: "18px", fontWeight: "bold" }}>Create Event</Link></li>
        <li><Link to="/login" style={{ color: "#f8f9fa", textDecoration: "none", fontSize: "18px", fontWeight: "bold" }}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;