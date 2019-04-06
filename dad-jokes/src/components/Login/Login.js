import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.scss";
import { logUserIn, createAccount } from "actions/";

function Login(props) {
  useEffect(
    () => {
      if (props.badLogin) {
        setErrorMessage(
          "Whoops, something went wrong.  Account already made, wrong username/password?  Who knows, I'm entirely too lazy to put that kind of effort into this app!"
        );
      }
    },
    [props.badLogin]
  );

  const location = props.location.pathname.substring(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    if (username.length < 4 || password.length < 4) {
      setErrorMessage(
        "Please give a username and password with at least 4 characters"
      );
    } else {
      location === "login"
        ? props.logUserIn({ username, password })
        : props.createAccount({ username, password });
      setErrorMessage("");
    }
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
          type="password"
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
            setErrorMessage("");
          }}
        >
          Clear Form
        </button>
      </div>

      <p>
        {props.loggingIn ? (
          <React.Fragment>
            <i className="far fa-cog fa-spin" />
            <br />
            Getin dat login
          </React.Fragment>
        ) : (
          ""
        )}
      </p>

      <p className={styles.error}>{errorMessage}</p>
    </form>
  );
}

const mapStateToProps = state => ({
  loggingIn: state.account.loggingIn,
  badLogin: state.account.badLogin
});

export default connect(
  mapStateToProps,
  { logUserIn, createAccount }
)(Login);
