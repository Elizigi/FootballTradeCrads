import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from "./MainPage.module.scss";
import Players from "../players/Players";
import ContactUs from "../contactUs/Contactus";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/mainPage">Home Page</Link>
      <Link to="/mainPage/addPlayers">Add Player</Link>
      <Link to="/mainPage/contactUs">Contact Us</Link>
    </div>
  );
};

const MainPage = () => {
  return (
    <div>
      <Footer />

      {/* הנתיבים מוצגים בתוך MainPage */}
      <Routes>
        <Route path="/" element={<h2>Choose an option above</h2>} />
        <Route path="/addPlayers" element={<Players />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default MainPage;
