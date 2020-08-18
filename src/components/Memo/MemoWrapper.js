// @flow
import * as React from "react";
import { useState } from "react";
import MemoWrapperChild from "./MemoWrapperChild";
import Title from "../Title";

const MemoWrapper = (props) => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const formSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
  };
  const countHandler = (event) => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <Title title={"React.memo()"} />
      <form onSubmit={formSubmit}>
        <input type={"text"} placeholder={"Enter Name"} />
        <input type={"submit"} value={"Submit"} />
      </form>
      <p style={{ textAlign: "left" }}>Child component: </p>
      <MemoWrapperChild name={name} />

      <button onClick={countHandler}>Increase counter: {counter}</button>
    </div>
  );
};
export default MemoWrapper;
