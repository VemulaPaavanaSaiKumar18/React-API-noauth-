import React from "react";
import "./Getuserdetials.css";
const Getusersdetails = (props) => {
  return (
    <div>
      <div>
        {props.item.map((movie) => (
          <div>
            <div className="item-id">{movie.id}</div>
            <div className="title-item">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getusersdetails;
