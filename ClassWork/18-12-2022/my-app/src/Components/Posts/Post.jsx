import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await data.json();
      setUserPost(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const ClickHandler = (params) => {
    navigate(`/PostDetails/${params}`);
  };
  return (
    <div className="container">
      <div className="row">
        {userPost.map((elem) => {
          return (
            <ul key={elem.id} className="list-group mt-2">
              <div className="col-md-3">
                <li onClick={() => ClickHandler(elem.id)} className="list-group-item mt-2 bg-info">
                  {elem.title}
                </li>
                <button
                  className="btn btn-primary bg-primary list-group-item mt-2"
                  onClick={() => ClickHandler(elem.id)}
                >
                  Show Details
                </button>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
