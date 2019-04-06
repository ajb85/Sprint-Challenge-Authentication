import React, { useState } from "react";

import styles from "./styles.module.scss";
import authUser from "auth/requiresAuth.js";

function Login(props) {
  const location = props.location.pathname.substring(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Login
  };
  return (
    <form onSubmit={e => handleSubmit(e)} className={styles.form}>
      <div className={styles.inputContainer}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">
          {location === "login" ? "Login" : "Create Account"}
        </button>
        <button
          type="button"
          onClick={() => {
            setUsername("");
            setPassword("");
          }}
        >
          Clear Form
        </button>
      </div>
      <p className={styles.error}>{errorMessage}</p>
    </form>
  );
}

export default Login;
