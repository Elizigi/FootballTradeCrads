import React from 'react'
import Players from "../players/Players";
import ContactUs from "../contactUs/Contactus";
import MainPage from '../mainPage/MainPage';
import { Link, Route, Routes } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {
    return (
      <div className={styles.header}>
        <Link to="/mainPage">Home Page</Link>
        <Link to="/mainPage/addPlayers">Add Player</Link>
        <Link to="/mainPage/contactUs">Contact Us</Link>
      </div>
    );
  };

export default Header
