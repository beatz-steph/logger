import React, { useState } from "react";
import { auth } from "../../firebase/firebase";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [signInCredentials, setSignInCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setSignInCredentials({ ...signInCredentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password);
  };

  const { email, password } = signInCredentials;

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <div className="form__title">Sign In</div>

      <FormInput
        type="email"
        value={email}
        handleChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <FormInput
        type="password"
        value={password}
        handleChange={handleChange}
        name="password"
        placeholder="Password"
      />
      <div className="sign-in-form__btn-holder">
        <CustomButton placeholder="Sign In" />
        <CustomButton isGoogle placeholder="Sign In with Google" />
      </div>
    </form>
  );
};

export default SignIn;
