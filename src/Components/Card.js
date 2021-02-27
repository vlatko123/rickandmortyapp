import React from "react";
import '../Components/Card.css';

const Card = ({ location, name, pic, status }) => {
  return (
    <div className="card">
      <div className="img-placeholder">
        <img src={pic} />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>{status}</p>
        <p>Last seen</p>
        <p>{location}</p>
       
      </div>
    </div>
  );
};

export default Card;
