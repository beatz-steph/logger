import React from "react";

import { Link, Redirect } from "react-router-dom";
import { signOut } from "../../firebase/firebase";

import "./side-nav.styles.scss";

const SideNav = ({ url }) => {
  const signMeOut = () => {
    signOut();
    return <Redirect to="/login" />;
  };
  return (
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
          onClick={signMeOut}
          to={"/login"}
          className="side-nav__option-text"
        >
          Log out
        </Link>
      </li>
    </ul>
  );
};

export default SideNav;
