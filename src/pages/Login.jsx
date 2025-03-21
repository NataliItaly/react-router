import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [state, setState] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const location = useLocation();
  const from = location.state?.from || "/host";

  const navigate = useNavigate();
  console.log(location);

  function handleSubmit(e) {
    e.preventDefault();
    setState("submitting");
    console.log(loginFormData);
    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem("loggedin");
        navigate(from, { replace: true });
      })
      .catch((er) => setError(er))
      .finally(() => setState("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-first">{location.state.message}</h3>
      )}
      <h1>Sign in to your account</h1>
      {error?.message && <h3>{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging in ..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
