import React from "react";
import "./FruitCard.css";

const FruitCard = props => (
  <div className="fruit-card">
    <img className="fruit-card__image" src={props.url} alt="Avatar" />
    <h4 className="fruit-card__name">{props.name}</h4>
  </div>
);

export default FruitCard;

// <div className="fruit-card__image">{props.image}</div>
