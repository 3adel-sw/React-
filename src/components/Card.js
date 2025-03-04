import React from "react";

const Card = ({ namesList, type }) => {
  return (
    <div>
      {namesList.map(({ name, age, country, job, phone }, idx) => (
        <div
          className="cardWeapper"
          key={idx}
          style={{ backgroundColor: type === "men" ? "green" : "pink" }}
        >
          <div>Name:{name}</div>
          <div>Age: {age}</div>
          <div>Country: {country}</div>
          <div>Job: {job}</div>
          <div>Phone : {phone}</div>
          <hr />
          <button onClick={() => alert(`Hello ${name}!`)}>Say Hello</button>
        </div>
      ))}
      ;
    </div>
  );
};

export default Card;
