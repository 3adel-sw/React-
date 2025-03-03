import React from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const names = [
    {
      name: "Adel",
      age: 26,
      country: "Egypt",
      job: "Software Developer Full Stack",
      phone: "01064620610",
    },
    {
      name: "Ahmed",
      age: 25,
      country: "Egypt",
      job: "Software Developer Front end",
      phone: "01064620610",
    },
    {
      name: "Ali",
      age: 24,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
    {
      name: "Hassan",
      age: 25,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
    {
      name: "Ibrahim",
      age: 18,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
  ];

  return (
    <div className="min-container">
      <Card namesList={names} />;
    </div>
  );
}

export default App;

// finsh React JSX Rule Part 3 The Inline Style
