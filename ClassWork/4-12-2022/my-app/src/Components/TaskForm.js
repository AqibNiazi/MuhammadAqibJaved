import React from "react";
import Input from "./Input";
import Button from "./Button";
import Table from "./Table";
import { useState } from "react";
const TaskForm = () => {
  const [userInput, setUserInput] = useState({
    orderData: "",
    pendingData: "",
    completedData: "",
  });
  const [userData, setUserData] = useState({
    order: [],
    pending: [],
    completed: [],
  });
  // const [order, setOrder] = useState([]);
  // const [pending, setPending] = useState([]);
  // const [completed, setCompleted] = useState([]);

  // const [orderData, setOrderData] = useState("");
  // const [pendingData, setPendingData] = useState("");
  // const [completedData, setCompletedData] = useState("");

  const Add = () => {
    userInput.orderData &&
      setUserData({
        ...userData,
        order: [...userData.order, userInput.orderData],
      });
    userInput.pendingData &&
      setUserData({
        ...userData,
        pending: [...userData.pending, userInput.pendingData],
      });
    userInput.completedData &&
      setUserData({...userData, completed:[...userData.completed,userInput.completedData]});

      setUserInput({...userInput,orderData:"",pendingData:"",completedData:""})
  };
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        boxShadow: " 0 1px 6px 0 rgb(32 33 36 / 28%)",
        padding: "6px 12px",
        marginTop: "60px",
      }}
    >
      <div>
        <Input
          placeholder="Order"
          value={userInput.orderData}
          method={(params) => setUserInput({ ...userInput, orderData: params })}
        />
        <Input
          placeholder="Pending Order"
          value={userInput.pendingData}
          method={(params) =>
            setUserInput({ ...userInput, pendingData: params })
          }
        />
        <Input
          placeholder="Completed Order"
          value={userInput.completedData}
          method={(params) =>
            setUserInput({ ...userInput, completedData: params })
          }
        />
        <Button method={Add} />
      </div>
      <div style={{ display: "flex" }}>
        <Table heading="Order" data={userData.order} />
        <Table heading="Pending Order" data={userData.pending} />
        <Table heading="Completed Order" data={userData.completed} />
      </div>
    </div>
  );
};

export default TaskForm;
