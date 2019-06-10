import React from "react";
import "./FruitsCardsList.css";
import FruitCard from "./FruitCard/FruitCard";
import { fruitsAndImages } from "../../data/data";

import { useFetch } from "../../hooks/hooks";

function FruitCardsList() {
  const [data, loading] = useFetch("https://api.myjson.com/bins/dllwk");
  return (
    <>
      <h2>Fruits with Images</h2>
      {loading ? (
        "Loading..."
      ) : (
        <div className="fruits-cards-list">
          {data.fruits.map(item => (
            <FruitCard key={item.name} name={item.name} url={item.url} />
          ))}
        </div>
      )}
    </>
  );
}

export default FruitCardsList;
