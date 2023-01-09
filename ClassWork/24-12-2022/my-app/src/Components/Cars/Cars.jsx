import React from "react";
import { useQuery } from "react-query";
import { fetchDBData } from "../Api/Api";
import { Link } from "react-router-dom";


import { Bars } from  'react-loader-spinner'

const Cars = () => {

  const { data, isLoading } = useQuery("cars", () => fetchDBData(), {
    cacheTime: 3000,
  });
  if (isLoading)
    return (
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );

  console.log(data);
  return (
    <ul className="col-md-6 mx-auto mt-5 list-group">
      {data?.data?.map((cars) => (
        <li key={cars.id} className="list-group-item text-center bg-light ">
          <Link
            to={`/cars/details/${cars.id}`}
            className="text-dark text-decoration-none fw-bold"
          >
            Cars name :{cars.carname}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Cars;
