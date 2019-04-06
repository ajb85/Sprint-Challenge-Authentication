import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./styles.module.scss";

function Nav(props) {
  console.log(props.username);
  const liLinks = (
    <NavLink
      to="/jokes"
      className={styles.link}
      activeClassName={styles.active}
    >
      Home
    </NavLink>
  );
  const loLinks = (
    <>
      <NavLink
        to="/register"
        className={props.username ? styles.disabled : styles.link}
        activeClassName={styles.active}
      >
        Create Account
      </NavLink>
      <NavLink
        to="/login"
        className={props.username ? styles.disabled : styles.link}
        activeClassName={styles.active}
      >
        Login
      </NavLink>
    </>
  );
  let links = props.username ? liLinks : loLinks;
  return (
    <div className={styles.navContainer}>
      <section className={styles.whiteSpace} />
      <section className={styles.linksContainer}>{links}</section>
      <section className={styles.whiteSpace}>
        {props.username ? (
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
  username: state.account.username
});

export default connect(
  mapStateToProps,
  {}
)(Nav);
