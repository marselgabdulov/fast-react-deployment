import React from "react";
import "./PersonsList.css";
import Person from "./Person/Person";
import { useFetch } from "../../hooks/hooks";

function PersonsList() {
  const [data, loading] = useFetch("https://api.myjson.com/bins/mj3z8");
  return (
    <>
      <h2>Persons</h2>
      {loading ? (
        "Loading..."
      ) : (
        <div className="persons-list">
          {data.map(person => (
            <Person
              key={person.id}
              name={person.name}
              username={person.username}
              email={person.email}
              street={person.address.street}
              city={person.address.city}
              phone={person.phone}
              website={person.website}
              companyName={person.company.name}
              companyCatchFrase={person.company.catchPhrase}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default PersonsList;
