import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios"
const Query = () => {
    const {data,isLoading}=useQuery("cars",()=>axios.get(" http://localhost:4000/Cars").then(res=>res));
    console.log(data);
    if(isLoading) return <p>Loading...</p>
  return (
    <div>
     <ul>
      {
        data.data.map((elem)=>{
          return <li key={elem.id}>{elem.name}</li>
        })
      }
     </ul>
    </div>
  )
}

export default Query