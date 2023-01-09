import {auth, signOut } from "../Utilities/Config";
import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
    const Logout = async () => { 
       await signOut(auth)
       navigate("/Login")
     }
  return (
    <div>
    <button className='btn btn-secondary' onClick={Logout}>Logout</button>
    </div>
  )
}

export default Home