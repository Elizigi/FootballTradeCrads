import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from "../public/login/Login.tsx";
import Register from "../public/register/Register.tsx";
import MainPage from "../public/mainPage/MainPage.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* מגדירים את MainPage כנתיב ראשי עם כל הנתיבים הפנימיים תחתיו */}
      <Route path="/mainPage/*" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
