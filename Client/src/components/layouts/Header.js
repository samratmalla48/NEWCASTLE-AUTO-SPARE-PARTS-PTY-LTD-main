import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand">
          <AiOutlineShoppingCart /> ---NewCastle Autoparts
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="/#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" href="/#">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Login" className="nav-link" href="/#">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/catalogue" className="nav-link" href="/#">
                Catalogue
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" href="/#">
                Cart(0)
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/Contact"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/#">
                  Action
                </a>
                <a className="dropdown-item" href="/#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
