import React from "react";
import { Redirect } from "react-router-dom";

const WithLoader = ({ isFetching, currentUser }) => {
  if (isFetching) {
    return <Redirect to="/" />;
  }
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default WithLoader;
