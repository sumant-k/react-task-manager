import * as React from "react";
const Navbar = (props) => {
  return (
    <React.Fragment>
      {/* Image and text */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
            width={30}
            height={30}
            className="d-inline-block align-top mr-2"
            alt=""
            loading="lazy"
          />
          Task Manager
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>

          <button className="ml-2 btn signup-btn" type="submit">
            Sign Up
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
