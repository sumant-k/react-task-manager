import * as React from "react";
import "./LoginPage.css";
import { useState } from "react";
const LoginPage = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (event) => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div className={"container"}>
        <form>
          <div className={"form-group"}>
            <input
              id={"email"}
              type={"text"}
              required
              autoFocus
              autoComplete={"new-password"}
            />
            {/*<input*/}
            {/*  id={"email"}*/}
            {/*  name="session_key"*/}
            {/*  type="text"*/}
            {/*  required*/}
            {/*  aria-describedby="error-for-username"*/}
            {/*  validation="email|tel"*/}
            {/*  autoFocus*/}
            {/*  aria-label="Email or Phone"*/}
            {/*/>*/}

            <label htmlFor={"email"}>Email or phone</label>
          </div>
          <div className={"form-group"}>
            <input id={"passwd"} type={toggle ? "text" : "password"} required />
            <label htmlFor={"passwd"}>Password </label>
            <span
              onClick={toggleHandler}
              className={"button-passwd"}
              role={"button"}
            >
              {toggle ? "Hide" : "show"}
            </span>
          </div>
          <div className={"form-group form-control"}>
            <button id={"submit"} type={"submit"}>
              Sign In
            </button>
          </div>
        </form>
        <div className={"container"}>
          <div className={"signin-extra"}>
            <div>
              <a>forgot password?</a>
            </div>
          </div>
          <div className={"signin-extra"}>
            <div>
              <p>
                New to App? <a>Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className={"app-footer"}>
        <p>
          <a>Link 1</a>
        </p>
        <p>
          <a>Link 2</a>
        </p>
        <p>
          <a>Link 3</a>
        </p>
      </footer>
    </React.Fragment>
  );
};
export default LoginPage;
