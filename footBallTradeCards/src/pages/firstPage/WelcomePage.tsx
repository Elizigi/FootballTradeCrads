import React, { useState } from 'react'
import style from "./Welcome.module.scss"
import {  useNavigate } from "react-router";



function WelcomePage() {

   const navigate = useNavigate();

  function goToLogin(){
    navigate("/login")
  }

  function goToRegister(){
    navigate("/register")
  }

  return (
    <div className={style.main}>
      <img src="https://toppsindia.com/assets/collections/match-attax/main_banner.jpg" alt="" />
      <br />
      <button className={style.button} onClick={goToLogin}>Login</button>
      <button className={style.button} onClick={goToRegister}>Register</button>
    </div>
  )
}

export default WelcomePage
