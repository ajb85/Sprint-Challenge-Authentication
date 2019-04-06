import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.scss";
import requiresAuth from "auth/requiresAuth.js";
import { fetchJokes, logOut } from "actions/";

function Jokes(props) {
  useEffect(() => {
    props.fetchJokes();
    if (!props.username) {
      props.logOut();
    }
  }, []);

  return (
    <div className={styles.jokes}>
      {props.jokes.map(joke => (
        <p key={joke.joke}>{joke.joke}</p>
      ))}
    </div>
  );
}
const mapStateToProps = state => ({
  jokes: state.jokes.jokes,
  username: state.account.username
});

export default connect(
  mapStateToProps,
  { fetchJokes, logOut }
)(requiresAuth(Jokes));
