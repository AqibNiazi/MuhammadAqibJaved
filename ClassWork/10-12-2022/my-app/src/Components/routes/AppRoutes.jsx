import React from 'react'
import LoginForm from '../LoginForm'
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Home from '../Home'
const AppRoutes = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/Login" element={<LoginForm/>}/>
      <Route path="/" element={<Home/>}/>
     </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes