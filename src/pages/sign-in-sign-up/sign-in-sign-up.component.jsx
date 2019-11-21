import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { Redirect } from "react-router-dom";
import { auth } from "../../firebase/firebase";

import "./sign-in-sign-up.styles.scss";

const SignInSignUp = () => {
  const user = auth.currentUser;
  console.log(user);

  if (user) {
    return <Redirect to="/Dashboard" />;
  } else {
    return (
      <div className="sign-in__sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
};

export default SignInSignUp;
