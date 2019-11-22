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

import WithLoader from "./components/with-loader/with-loader.component";

import "./app.scss";
import { Switch, Route, Redirect } from "react-router-dom";

function App({ checkUserSession, currentUser, isFetching }) {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div>
      <WithLoader isFetching={isFetching} currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Loader loader />;
        </Route>
        <Route path="/dashboard">
          <Landing />;
        </Route>
        <Route path="/signin">
          <SignInSignUp />;
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
