import React from "react";
import Card from "../Card/Card";
import "./App.css";

function App() {
  const boys = [
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
  const girls = [
    {
      name: "Nermeen",
      age: 26,
      country: "Egypt",
      job: "Software Developer Full Stack",
      phone: "01064620610",
    },
    {
      name: "Asma",
      age: 25,
      country: "Egypt",
      job: "Software Developer Front end",
      phone: "01064620610",
    },
    {
      name: "Sara",
      age: 24,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
    {
      name: "Nada",
      age: 25,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
    {
      name: "Nour",
      age: 18,
      country: "Egypt",
      job: "Software Developer Back end",
      phone: "01064620610",
    },
  ];

  return (
    <div className="min-container">
      <h1>Data Boys</h1>
      <Card namesList={boys} type="men" />;<h1>Data Girls</h1>
      <Card namesList={girls} type="women" />;
      {/* <Card namesList={[...boys, ...girls]} />; */}
    </div>
  );
}

export default App;

// finsh React JSX Rule Part 3 The Inline Style
// 01119836478 Ahmed Alsapk ````
