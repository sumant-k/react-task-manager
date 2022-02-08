import React from "react";
import "./App.css";
import "./Normalize.css";
import ProtectedRoute from "./Containers/Routes/ProtectedRoute";
import Task from "./Containers/Task";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Containers/Login";
import DuckDuckGo from "./components/DuckDuckGo/DuckDuckGo";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path={"/"} exact component={Login} />
        <Route path={"/notes"} component={Task} exact />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
