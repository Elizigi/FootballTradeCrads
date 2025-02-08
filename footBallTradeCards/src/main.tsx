import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import MainPage from "./pages/mainPage/MainPage.tsx";
import Players from "./pages/players/Players.tsx";
import ContactUs from "./pages/contactUs/Contactus.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* the main page */}
      <Route path="/mainPage" index element={<MainPage />} />

      {/*pages under main page */}
      <Route path="/mainPage/addPlayers" element={<Players />} />
      <Route path="/mainPage/contactUs" element={<ContactUs />} />
      
    </Routes>
  </BrowserRouter>
  </StrictMode>,)
