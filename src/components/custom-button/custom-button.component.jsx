import React from "react";
import { SignInWithGoogle } from "../../firebase/firebase";

import "./custom-button.styles.scss";

const CustomButton = ({ isGoogle, placeholder }) => {
  return (
    <input
      onClick={isGoogle ? SignInWithGoogle : null}
      type={`${isGoogle ? "button" : "submit"}`}
      className={`btn ${isGoogle ? "btn__google" : null}`}
      value={placeholder}
    />
  );
};

export default CustomButton;
