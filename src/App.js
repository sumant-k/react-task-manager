import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MemoWrapper from "./components/Memo/MemoWrapper";
import HeavyCalculation from "./components/Memo/HeavyCalculation";
import LoginPage from "./components/LinkedIn/LoginPage";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <div className={"header-content"}>
            {/*<img*/}
            {/*  className={"logo"}*/}
            {/*  alt={"logo"}*/}
            {/*  src="https://img.icons8.com/cotton/64/000000/system-task.png"*/}
            {/*/>*/}
            <h1>Login</h1>
          </div>
        </header>
        {/*<MemoWrapper />*/}
        {/*<div className={"hr"}>*/}
        {/*  <hr />*/}
        {/*</div>*/}
        {/*<HeavyCalculation />*/}
      </div>
      <LoginPage />
    </React.Fragment>
  );
}

export default App;
