import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchDBDataWithId } from "../Api/Api";
// const fetchPost = (id) => {
//   return axios.get(`http://localhost:4000/Cars/${id}`);
// };
const CarDetails = () => {
  const { id } = useParams();
  const { data, Isloading } = useQuery(["cat", id], () =>
    fetchDBDataWithId(id)
  );
  if (Isloading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul className="list-group col-md-5 mx-auto mt-4 fw-bold">
        <li className="list-group-item text-center bg-info">
          Car Model:
          {data?.data.carmodel}
        </li>
      </ul>
      <button className="btn btn-primary">Delete Car</button>
    </div>
  );
};

export default CarDetails;
