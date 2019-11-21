import React, { useState, useEffect } from "react";

import Landing from "./pages/landing/landing.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase";

import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      const userdata = createUserProfileDocument(userAuth);

      setUser(userdata);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Router>
      <div></div>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/Dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <SignInSignUp user={user} />
        </Route>
        <Route path="/Dashboard">
          {user ? <Landing /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
