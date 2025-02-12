import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
    alert("Login Successful!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#f8f9fa" }}>Login</h1>
      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}
      >
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "none" }} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "none" }} 
          required
        />
        <button 
          type="submit" 
          style={{ background: "#007bff", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;