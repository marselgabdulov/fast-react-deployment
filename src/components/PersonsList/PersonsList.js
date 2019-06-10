import React from "react";
import { personsList } from "../../data/data";
import "./PersonsList.css";
import Person from "./Person/Person";

const PersonsList = () => (
  <div className="persons-list">
    {personsList.map(person => (
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
);

export default PersonsList;
