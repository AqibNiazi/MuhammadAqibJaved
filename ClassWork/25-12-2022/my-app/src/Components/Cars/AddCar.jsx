import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

const saveDBData = (data) => {
  return axios.post("http://localhost:4000/Cars", data);
};
const AddCar = () => {
  const [carname, setCarName] = useState("");
  const [carmodel, setCarModel] = useState("");
  const { mutate } = useMutation(saveDBData);
  const handleSave = () => {
    const data = { carname, carmodel };
    mutate(data, {
      onSuccess: () => {
        toast.success("success");
      },
      // onSettled: data => {
      //   queryClient.invalidateQueries(['todos', newTodo.id])
      // },
    });
  };
  return (
    <div className="col-md-5 mx-auto d-flex flex-column">
      <input
        type="text"
        placeholder="Enter Car Name"
        value={carname}
        onChange={(e) => setCarName(e.target.value)}
        className="form-control mt-3"
      />
      <input
        type="text"
        placeholder="Enter Car Model"
        value={carmodel}
        onChange={(e) => setCarModel(e.target.value)}
        className="form-control mt-2"
      />
      <button
        onClick={handleSave}
        className="btn btn-primary w-25 b-width mx-auto mt-3"
      >
        Save
      </button>
    </div>
  );
};

export default AddCar;
