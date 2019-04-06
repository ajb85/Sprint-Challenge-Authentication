import React from "react";
import styles from "./styles.module.scss";
import { Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./components/Login";

function App(props) {
  return (
    <div className={styles.App}>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Login} />
    </div>
  );
}

export default App;
