import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  //const authenticated = false;
  const isLoggedIn = localStorage.getItem("logeedin");
  const location = useLocation();

  if (!isLoggedIn) {
    <Navigate
      to="/login"
      state={{ message: "Please, log in first", from: location.pathname }}
      replace
    />;
  }

  return <Outlet />;
}
