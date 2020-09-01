import * as React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = (props) => {
  const { errors, register, handleSubmit } = useForm();
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (event) => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div className={"login container mt-100 d-flex justify-content-center"}>
        <div className="col-sm-12 col-lg-6 col-xs-5 col-md-8 col-xl-5">
          <form className={""} onSubmit={handleSubmit(props.onSubmit)}>
            <div className={"form-group input-container"}>
              <input
                className={"form-control"}
                ref={register({ required: true })}
                id={"email"}
                type={"text"}
                required
                autoFocus
                autoComplete={"new-password"}
                name={"email"}
              />

              <label htmlFor={"email"}>Email or phone</label>
            </div>
            <div className={"form-group input-container"}>
              <input
                className={"form-control"}
                ref={register({ required: true })}
                id={"passwd"}
                type={toggle ? "text" : "password"}
                required
                name={"password"}
              />
              <label htmlFor={"passwd"}>Password </label>
              <span
                onClick={toggleHandler}
                className={"button-passwd"}
                role={"button"}
              >
                {toggle ? "Hide" : "show"}
              </span>
            </div>
            <div className={"form-group input-container bg-dark"}>
              <button
                className={"btn signup-btn"}
                id={"submit"}
                type={"submit"}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginPage;
