import React, { useEffect } from "react";

import Landing from "./pages/landing/landing.component";
import { createStructuredSelector } from "reselect";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Loader from "./components/loader/loader.component";

import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import {
  selectIsFetchingUser,
  selectUserCurrentUser
} from "./redux/user/user.selector";

import { auth } from "./firebase/firebase";

import "./app.scss";
import { Switch, Route, Redirect } from "react-router-dom";

function App({ checkUserSession, currentUser, isFetching }) {
  const currUse = auth.currentUser;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession, currUse]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {isFetching ? (
            <Loader spinner />
          ) : currentUser ? (
            <Redirect to="/dashboard" />
          ) : !currentUser ? (
            <Redirect to="/signin" />
          ) : null}
        </Route>
        <Route path="/dashboard">
          {!currentUser ? <Redirect to="/" /> : <Landing />}
        </Route>
        <Route path="/signin">
          {isFetching && !currentUser ? (
            <Redirect to="/" />
          ) : currentUser ? (
            <Landing />
          ) : !currentUser ? (
            <SignInSignUp />
          ) : null}
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToprops = createStructuredSelector({
  currentUser: selectUserCurrentUser,
  isFetching: selectIsFetchingUser
});

export default connect(mapStateToprops, mapDispatchToProps)(App);
