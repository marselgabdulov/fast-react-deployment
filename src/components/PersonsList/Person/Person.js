import React from "react";
import "./Person.css";

const Person = props => (
  <div className="person">
    <div className="name">
      <b>name</b>: <b>{props.name}</b>
    </div>
    <div className="username">
      <b>username</b>: {props.username}
    </div>
    <div className="email">
      <b>email</b>: {props.email}
    </div>
    <div className="address">
      <h4>
        <b>address</b>:{" "}
      </h4>
      <ul>
        <li className="address__street">
          <b>street</b>: {props.street}
        </li>
        <li className="address__city">
          <b>city</b>: {props.city}
        </li>
      </ul>
    </div>
    <div className="phone">
      <b>phone</b>: {props.phone}
    </div>
    <div className="website">
      <b>website</b>:{" "}
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        {props.website}
      </a>
    </div>
    <div className="company">
      <h4>
        <b>company</b>:{" "}
      </h4>
      <ul>
        <li className="company__name">
          <b>company name</b>: {props.companyName}
        </li>
        <li className="company__catchPhrase">
          <b>catch frase</b>: {props.companyCatchFrase}
        </li>
      </ul>
    </div>
  </div>
);

export default Person;
