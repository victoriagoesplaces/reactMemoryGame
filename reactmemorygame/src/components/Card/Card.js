import React from "react";
import './Card.css';

const Card = props => {
  console.log(props);

  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img-top" alt={props.name} src={props.image} />
      </div>
    </div>
  );
};



export default Card;