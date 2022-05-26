import React from "react";
import "./login.scss";
import Left from "./left/left";
import Right from "./right/right";

function Login() {
  return (
    <div className="login">
      <Left />
      <Right />
    </div>
  );
}

export default Login;
