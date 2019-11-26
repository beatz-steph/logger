import React from "react";
import SearchBar from "../search-bar/search-bar.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserCurrentUser } from "../../redux/user/user.selector";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  const { displayName } = currentUser;
  return (
    <div className="header">
      <div className="header__logo">
        <span className="header__logo--text-1">Workers</span>
        <span className="header__logo--text-2">Logger</span>
      </div>
      <SearchBar />
      <div className="header__navigation">
        <div className="header__navigation--notification">
          <ion-icon className="icon" name="notifications-outline"></ion-icon>
        </div>
        <div className="header__navigation--avatar">
          <span className="header__navigation--avatar-name">{displayName}</span>
          <img className="header__navigation--avatar-img" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrentUser
});

export default connect(mapStateToProps)(Header);
