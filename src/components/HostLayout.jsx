import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav>
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? "host-active" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "host-active" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "host-active" : null)}
        >
          Reviews
        </NavLink>

        <NavLink
          to="/host/vans"
          end
          className={({ isActive }) => (isActive ? "host-active" : null)}
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
