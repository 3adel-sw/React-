import React from "react";

function App() {
  const styles = { color: "red", fontSize: "44px" };
  const myName = "Adel";
  const names = ["Adel", "Dola", "M7"];
  return (
    <fragent>
      <h1>My React App</h1>
      <h2>My React App</h2>
      <h3>My React App</h3>
      <h4>My React App</h4>
      <p style={styles}>Hello World</p>
      <p style={styles}>{myName === "Adel" ? "Hello Adel" : "Hello There"}</p>
      <p style={styles}>{myName === "Dola" ? "Hello Adel" : "Hello There"}</p>
      <div>
        Names :
        {names.map((el) => (
          <p>{el}</p>
        ))}
      </div>
      <h5>My React App</h5>
      <h6>My React App</h6>
    </fragent>
  );
}

export default App;

// finsh React JSX Rule Part 3 The Inline Style
