import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [state,setState]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            getUserData();
        },2000)
    },[]);
    const getUserData=async ()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await response.json();
            setState(data);
        }catch(error){
console.log("error",error.message);
        }
    }
  return (
    <div>
    {
        state.length > 0 ? (
            state.map((el)=>(
                <div>
                <ul>
                <li>User Id :{el.id}</li>

                    <li>User name :{el.name}</li>
                    <li>User Address :{el.address.street}</li>
                    <li>User Email :{el.email}</li>

                </ul>
                </div>
            ))
        ) :(
            <p> Loading...</p>
        )
    }
    </div>
  )
}

export default Counter;