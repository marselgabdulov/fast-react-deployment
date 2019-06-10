import React from "react";
import { useFetch } from "../../hooks/hooks";

function FruitsList() {
  const [data, loading] = useFetch("https://api.myjson.com/bins/jbdb8");
  return (
    <>
      <h2>Simple Fruit List</h2>
      {loading ? (
        "Loading..."
      ) : (
        <ol>
          {data.fruits.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
    </>
  );
}

export default FruitsList;
