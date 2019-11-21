import React from "react";
import SearchBar from "../search-bar/search-bar.component";

import { auth } from "../../firebase/firebase";
import "./header.styles.scss";

const Header = () => {
  const { displayName, photoURL } = auth.currentUser || null;

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
          <img
            className="header__navigation--avatar-img"
            src={photoURL}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
