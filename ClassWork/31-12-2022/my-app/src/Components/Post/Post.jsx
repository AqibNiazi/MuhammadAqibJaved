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
    } catch (error) {
      console.log(error.message);
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
              <li onClick={() => ClickHandler(elem.id)} className="list-group-item">
                {elem.title}
              </li>
              <button
                className="btn btn-primary list-group-item"
                onClick={() => ClickHandler(elem.id)}
              >
                Show Details
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
