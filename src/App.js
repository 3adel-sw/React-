import React from "react";

const App = () => {
  return (
    <div>
      <h1
        className="text-3xl font-bold underline text-center"
        style={{
          color: "blue",
        }}
      >
        Hello World
        <span
          className="text-sm font-normal"
          style={{
            color: "red",
            backgroundColor: "yellow",
          }}
        >
          (React)
        </span>
      </h1>
    </div>
  );
};

export default App;
