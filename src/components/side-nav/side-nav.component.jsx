import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signOutStart } from "../../redux/user/user.actions";

import "./side-nav.styles.scss";

const SideNav = ({ url, dispatch }) => (
  <ul className="side-nav">
    <li className="side-nav__option active">
      <Link to={`${url}`} className="side-nav__option-text">
        Home
      </Link>
    </li>
    <li className="side-nav__option">
      <Link to={`${url}/add-worker`} className="side-nav__option-text">
        Add workers
      </Link>
    </li>
    <li className="side-nav__option">
      <Link
        onClick={() => {
          dispatch(signOutStart());
        }}
        to={"/login"}
        className="side-nav__option-text"
      >
        Log out
      </Link>
    </li>
  </ul>
);

export default connect(null)(SideNav);
