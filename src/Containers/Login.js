import * as React from "react";
import LoginPage from "../components/LinkedIn/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../redux/actions/actionCreator";
import Navbar from "../components/Navigator/Navbar";
import { useEffect } from "react";
import { STATUS_CODE_SUCCESS } from "../redux/constants/constants";
import { withRouter } from "react-router";

const Login = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.info("[Form data]", data);
    dispatch(requestLogin(data));
  };
  const response = useSelector((state) => ({
    isLoading: state.loginReducer.isLoading,
    user: state.loginReducer.user,
    userToken: state.loginReducer.token,
    statusCode: state.loginReducer.statusCode,
  }));
  console.log("[state] Login", response);
  useEffect(() => {
    if (response.statusCode === STATUS_CODE_SUCCESS) {
      props.history.push("/notes");
    }
  }, [response.statusCode]);
  return (
    <React.Fragment>
      <Navbar />
      <LoginPage isLoading={response.isLoading} onSubmit={onSubmit} />
    </React.Fragment>
  );
};
export default withRouter(Login);
