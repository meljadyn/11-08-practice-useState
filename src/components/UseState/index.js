import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button
        onClick={() => {
          setTheme((lastTheme) => {
            let themes = ["light", "dark"];
            let index = themes.indexOf(lastTheme);

            return themes[(index + 1) % 2];
          });
        }}
      >
        Change Theme
      </button>

      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
