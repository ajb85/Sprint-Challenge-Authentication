import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Nav from "./components/Nav";
import Login from "./components/Login";
import Jokes from "./components/Jokes";

import { logOut } from "actions/";

function App(props) {
  useEffect(() => {
    return () => {
      localStorage.removeItem("token");
      props.logOut();
    };
  }, []);
  return (
    <div className={styles.App}>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Login} />
      <Route path="/jokes" component={Jokes} />
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.account.username
});
export default connect(
  mapStateToProps,
  { logOut }
)(App);
