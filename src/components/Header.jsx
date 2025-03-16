import React from "react";
import { NavLink, Link } from "react-router-dom";
import imageUrl from "../assets/images/avatar-icon.png";

export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    console.log();
  }

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Host
        </NavLink>
      </nav>
      <Link to="login" className="login-link">
        <img src={imageUrl} className="login-icon" />
      </Link>
      <button onClick={fakeLogOut}>
        {!localStorage.getItem("loggedin") ? "Log In" : "Log Out"}
      </button>
    </header>
  );
}
