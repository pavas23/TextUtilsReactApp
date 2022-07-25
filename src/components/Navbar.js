import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={props.textColor}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={props.textColor}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={props.textColor}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                style={props.textColor}
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" style={props.textColor}>
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" style={props.textColor}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#style ={props.textColor}">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" style={props.textColor}>
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex mx-12x ms-0 me-5" role="search">
            <input
              className="form-control ms-0  me-2 my-2 mx-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2"
              type="submit"
              style={props.textColor}
            >
              Search
            </button>
          </form>
          <div className="form-check form-switch">
            <input
              className="form-check-input my-2"
              onChange={props.modefunc}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={props.textColor}
            >
              {[props.toggleText]}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// for specifying the proptype
Navbar.propTypes = {
  title: PropTypes.string,
};

// for setting the default value of props incase not passes when importing the component

Navbar.defaultProps = {
  title: "hello this is default vale of the title",
};
