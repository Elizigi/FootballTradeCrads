import React, { useState } from "react";
import {  useNavigate } from "react-router";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isMessage, setIsMessage] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

 async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (
      !formData.userName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields must be filled");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log("Registered successfully!", formData);
    const _userName = formData.userName;
    const email = formData.email;
    const password = formData.password;

    // ali word for this
    // send form data to server
  
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({_userName, email, password}),
  });

  if (response.status == 400) {
    setIsMessage(true);
    setMessage("Email already exists");
    return;
  }

  if (response.status !== 200) {
    alert("try again")
  }

  if (response.status === 200) {
    setIsMessage(false)
    alert("Registration successful")
    navigate('/mainPage');
  }
}
  
  // const data = await response.json();
  // const registerPopup = document.getElementById('registerPopup'); 
  // if (response.ok) {
  //     console.log('success');
  //     registerPopup!.style.display = 'none';
  //     window.location.href = "/";
  // } else {
  //     alert(data.message);
  // }
  // }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label>User Name:</label>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        required
      />
      <br /><br />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br /><br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br /><br />
      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <br /><br />
      {isMessage && <p style={{color:"red"}}>{message}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
