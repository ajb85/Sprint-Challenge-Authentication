import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./styles.module.scss";
import { logOut } from "actions/";

function Nav(props) {
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
          <button
            type="button"
            className={styles.logout}
            onClick={() => {
              props.logOut();
            }}
          >
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
  { logOut }
)(Nav);
