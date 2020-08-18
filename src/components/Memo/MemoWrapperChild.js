import * as React from "react";
import { useEffect, useState } from "react";

const MemoWrapperChild = (props) => {
  const [lastMount, setLastMount] = useState("");
  useEffect(() => {
    setLastMount(new Date().toLocaleTimeString());
  }, []);
  return (
    <div className={"display-name"}>
      <p>My Name is: {props.name}</p>
      <small>Last rendered at: {new Date().toLocaleTimeString()}</small>
      <br />
      <small>Last mounted at: {lastMount}</small>
    </div>
  );
};
export default React.memo(MemoWrapperChild);
// export default MemoWrapperChild;
