import React from "react";

import { connect } from "react-redux";

import { googleSignInstart } from "../../redux/user/user.actions";

import "./custom-button.styles.scss";

const CustomButton = ({ isGoogle, placeholder, dispatch }) => {
  return (
    <input
      onClick={isGoogle ? () => dispatch(googleSignInstart()) : null}
      type={`${isGoogle ? "button" : "submit"}`}
      className={`btn ${isGoogle ? "btn__google" : null}`}
      value={placeholder}
    />
  );
};

export default connect(null)(CustomButton);
