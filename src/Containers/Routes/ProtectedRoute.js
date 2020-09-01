import * as React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ path, Component, ...rest }) => {
  return (
    <React.Fragment>
      <Route {...rest} exact render={(props) => <Component {...props} />} />
    </React.Fragment>
  );
};
export default ProtectedRoute;
