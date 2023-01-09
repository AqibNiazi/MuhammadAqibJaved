import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const PostDetails = () => {
  const [postData, setPostData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPostDetail();
  }, []);
  const getPostDetail = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const response = await data.json();
      console.log(response);
      setPostData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list-group text-white">
     <li className="list-group-item btn btn-outline-info"> Post title {postData.title}</li>
      <li className="list-group-item btn btn-outline-success">Post Details: {postData.body}</li>
    </div>
  );
};

export default PostDetails;
