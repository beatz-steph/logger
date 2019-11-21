import React from "react";
import Header from "../../components/header/header.component";
import SideNav from "../../components/side-nav/side-nav.component";
import Home from "../../dashboard/home/home.component";
import AddWorkerPage from "../../dashboard/add-worker/add-worker.component";

import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./landing.styles.scss";

const Landing = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__display">
        <SideNav url={url} />

        <Switch>
          <Route exact path={path}>
            <Home />
          </Route>
          <Route path={`${path}/add-worker`}>
            <AddWorkerPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Landing;
