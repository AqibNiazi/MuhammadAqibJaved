import axios from "axios";
import React, { useState,useEffect } from "react";

const DogImg = () => {
    useEffect(() => {
        fetchData()
    }, [])
    
  const fetchData = async () => {
    const dogimages = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    setDogImage(dogimages.data.message);
    console.log(dogimages);
  };
  const [dogImage, setDogImage] = useState("");
  return <div className="col-md-5 mx-auto mt-5"><img src={dogImage} alt="Dogimage" style={{width:"300px"}}/>
   <button onClick={fetchData} className="btn btn-primary">Fetch Image</button></div>;
};

export default DogImg;
