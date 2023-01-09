import React from "react";
import LoginForm from "../Login/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Post from "../Posts/Post";
import AppLayout from "../Layout/AppLayout";
import Query from "../ReactQuery/Query";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginForm />} />
        <Route element={<AppLayout />}>
          <Route path="/Posts" element={<Post />} />
          <Route path="/Query" element={<Query />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
