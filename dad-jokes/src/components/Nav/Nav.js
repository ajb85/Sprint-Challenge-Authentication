import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./styles.module.scss";

function Nav({ loggedIn }) {
  const liLinks = [
    <NavLink
      to="/jokes"
      className={styles.link}
      activeClassName={styles.active}
    >
      Home
    </NavLink>
  ];
  const loLinks = [
    <NavLink
      to="/register"
      className={loggedIn ? styles.disabled : styles.link}
      activeClassName={styles.active}
    >
      Create Account
    </NavLink>,
    <NavLink
      to="/login"
      className={loggedIn ? styles.disabled : styles.link}
      activeClassName={styles.active}
    >
      Login
    </NavLink>
  ];
  let links = loggedIn ? liLinks : loLinks;
  return (
    <div className={styles.navContainer}>
      <section className={styles.whiteSpace} />
      <section className={styles.linksContainer}>{links}</section>
      <section className={styles.whiteSpace}>
        {loggedIn ? (
          <button type="button" className={styles.logout}>
            Logout
          </button>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.account.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(Nav);
