import * as React from "react";
import { useEffect, useState } from "react";

const HeavyCalculationChild = (props) => {
  const [lastMount, setLastMount] = useState("");
  useEffect(() => {
    setLastMount(new Date().toLocaleTimeString());
  }, []);
  return (
    <React.Fragment>
      <div className={"display-name"}>
        <div>
          <p>My Name is: {props.name}</p>
        </div>
        sum of fibonacci upto: {props.counter}
        <p>{props.value}</p>
        <small>Last rendered at: {new Date().toLocaleTimeString()}</small>
        <br />
        <small>Last mounted at: {lastMount}</small>
      </div>
    </React.Fragment>
  );
};
export default React.memo(HeavyCalculationChild);
