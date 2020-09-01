import * as React from "react";
import LoginPage from "../components/LinkedIn/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../redux/actions/actionCreator";
import Navbar from "../components/Navigator/Navbar";

const Login = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.info("[Form data]", data);
    dispatch(requestLogin(data));
  };
  const response = useSelector((state) => ({
    isLoading: state.loginReducer.isLoading,
    data: state.loginReducer.data,
    status: state.loginReducer.status,
    statusCode: state.loginReducer.statusCode,
  }));
  console.log("[state] Login", response);
  return (
    <React.Fragment>
      <Navbar />
      <LoginPage onSubmit={onSubmit} />
    </React.Fragment>
  );
};
export default Login;
