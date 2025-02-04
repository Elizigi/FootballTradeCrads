import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from "../public/login/Login.tsx"
import Register from "../public/register/Register.tsx"


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="todo" element={<ToDoMainPage />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="login" element={<LRpage />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} /></Route> */}
    </Routes>
</BrowserRouter>
)
