import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../firebase/firebase";

import { collectedWorkerDetails } from "../../utilities";

import WorkerEntry from "../worker-entry/worker-entry.component";

import "./workers-collection.style.scss";

const WorkersCollection = () => {
  const uid = auth.currentUser.uid || null;
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    let unSubscribeFromFirestore = null;
    unSubscribeFromFirestore = firestore
      .collection(`users/${uid}/workers`)
      .onSnapshot(snapshot => {
        const workerCollection = snapshot.docs.map(collectedWorkerDetails);
        setWorkers(workerCollection);
      });

    return () => {
      unSubscribeFromFirestore();
      console.log("unmouted");
    };
  }, [uid]);

  return (
    <div className="workers-collection">
      <div className="workers-collection__title">Current workers</div>

      <div className="workers-collection__entry-table">
        <div className="workers-collection__entry-table--header">
          <div className="table__cell-1 table--heading">Name</div>
          <div className="table__cell-2 table--heading">Position</div>
          <div className="table__cell-3 table--heading">Office</div>
          <div className="table__cell-4 table--heading">Age</div>
          <div className="table__cell-5 table--heading">Start date</div>
          <div className="table__cell-6 table--heading">Salary</div>
        </div>
        {workers.map(work => (
          <WorkerEntry key={work.id} work={work} />
        ))}
      </div>

      <div className="workers-collection__footer"></div>
    </div>
  );
};

export default WorkersCollection;
