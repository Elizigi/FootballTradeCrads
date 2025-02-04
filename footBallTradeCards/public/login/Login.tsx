import React, { useState } from "react";
import {  useNavigate } from "react-router";

function LoginForm() {

    const navigate = useNavigate();

function checkLogin(){
    alert("עובדים על זה");
  // ali work for this
  
}

function goToRegister(){
    navigate("/register")
  
}
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("All fields must be filled");
      return;
    }

    console.log("Logged in successfully!", formData);
    // ali work for this
  }

  return (
    <div>
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
<br />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
<br /><br />
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />
<br /><br />
      <button type="submit">Login</button>
    </form>
<p>Don't have an account? <button onClick={goToRegister}>Register</button></p>
    </div>
  );
}

export default LoginForm;








