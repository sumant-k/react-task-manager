import React from "react";
import "./App.css";
import "./Normalize.css";
import ProtectedRoute from "./Containers/Routes/ProtectedRoute";
import Note from "./Containers/Note";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Containers/Login";
import DuckDuckGo from "./components/DuckDuckGo/DuckDuckGo";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path={"/"} exact component={Login} />
        {/*<ProtectedRoute path={"/notes"} Component={Note} />*/}
        {/*<DuckDuckGo />*/}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
