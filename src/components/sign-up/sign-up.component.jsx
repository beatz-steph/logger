import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase";
import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    surname: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    const userAuth = auth.createUserWithEmailAndPassword(email, password);
    createUserProfileDocument(userAuth, {
      displayName: `${firstname} ${surname}`
    });
  };

  const {
    email,
    password,
    firstname,
    surname,
    confirmPassword
  } = signUpCredentials;

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <div className="form__title">Sign Up</div>
      <FormInput
        type="text"
        value={firstname}
        handleChange={handleChange}
        name="firstname"
        placeholder="Firstname"
      />
      <FormInput
        type="text"
        value={surname}
        handleChange={handleChange}
        name="surname"
        placeholder="Surname"
      />
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
      <FormInput
        type="password"
        value={confirmPassword}
        handleChange={handleChange}
        name="confirmPassword"
        placeholder="Confirm password"
      />
      <CustomButton placeholder="Sign Up" />
    </form>
  );
};

export default SignUp;
