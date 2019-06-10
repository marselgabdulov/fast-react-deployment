import React from "react";
import "./FruitsCardsList.css";
import FruitCard from "./FruitCard/FruitCard";
import { fruitsAndImages } from "../../data/data";

const FruitCardsList = () => (
  <div className="fruits-cards-list">
    {fruitsAndImages.fruits.map(item => (
      <FruitCard key={item.name} name={item.name} url={item.url} />
    ))}
  </div>
);

export default FruitCardsList;
