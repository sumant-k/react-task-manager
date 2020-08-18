import * as React from "react";
import Title from "../Title";
import { useMemo, useState } from "react";
import HeavyCalculationChild from "./HeavyCalculationChild";

const HeavyCalculation = (props) => {
  const [name, setName] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
  };
  const [counter, setCounter] = useState(35);
  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  return (
    <React.Fragment>
      <Title title={"useMemo()"} />
      <form onSubmit={formSubmit}>
        <input type={"text"} placeholder={"Enter Name"} />
        <input type={"submit"} value={"Submit"} />
      </form>

      <button onClick={(event) => setCounter(counter + 1)}>
        Increase Count
      </button>
      <button onClick={(event) => setCounter(35)}>Reset Count</button>
      <p style={{ textAlign: "left" }}>Child component:</p>
      <HeavyCalculationChild
        name={name}
        counter={counter}
        value={useMemo(() => fibonacci(counter), [counter])}
      />
    </React.Fragment>
  );
};
export default HeavyCalculation;
