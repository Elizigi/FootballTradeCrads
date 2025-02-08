import React, { useState } from "react";
import {  useNavigate } from "react-router";

function LoginForm() {

    const navigate = useNavigate();


function goToRegister(){
    navigate("/register")
  
}
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();


    if (!formData.email || !formData.password) {
      setError("All fields must be filled");
      return;
    }
    
    const email = formData.email;
    const password = formData.password;

    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password}),
  });

  if (response.status === 400) {
    setIsMessage(true);
    setMessage("Invalid email or password");

  }

  if (response.status === 200) {
    alert("Registration successful")
    navigate('/mainPage');
  }
  
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
      {isMessage && <p style={{color:"red"}}>{message}</p>}
      <br />
      <button type="submit">Login</button>
    </form>
<p>Don't have an account? <button onClick={goToRegister}>Register</button></p>
    </div>
  );
}

export default LoginForm;








