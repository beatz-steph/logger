import React from "react";
import WorkersCollection from "../../components/workers-collection/workers-collection.component";
import { auth } from "../../firebase/firebase";

import "./home.styles.scss";

const Home = () => {
  return auth.currentUser ? (
    <div className="home">
      <WorkersCollection />
    </div>
  ) : null;
};

export default Home;
