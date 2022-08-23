import React, { useState } from "react";
import Getusersdetails from "../CardItems/Getseursdetials";
import "./GetApi.css";

const GetApi = () => {
  const [post, setPost] = useState([]);
  const getDataHanduler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    let data = await response.json();
    const transData = data.map((details) => {
      return {
        id: details.id,
        title: details.title,
      };
    });
    setPost(transData);
    console.log(transData);
  };

  return (
    <div>
      <div>
        <button className="showdata" onClick={getDataHanduler}>
          GET DATA
        </button>
      </div>
      <div>
        <Getusersdetails item={post} />
      </div>
    </div>
  );
};
export default GetApi;
