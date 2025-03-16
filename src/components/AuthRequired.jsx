import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = false;

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ message: "Please, log in first" }} />
  );
}
