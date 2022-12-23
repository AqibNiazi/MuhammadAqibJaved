import React from "react";
import LoginForm from "../Login/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Post from "../Post";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Posts" element={<Post />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
