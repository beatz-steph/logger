import React, { useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUserCurrentUser } from "../../redux/user/user.selector";
import { selectWorkers } from "../../redux/workers/workers.selectors";

import {
  workersFetchStart,
  clearWorkers
} from "../../redux/workers/workers.action";

import WorkerEntry from "../worker-entry/worker-entry.component";
import Loader from "../loader/loader.component";

import "./workers-collection.style.scss";

const WorkersCollection = ({ currentUser, workersCollection, dispatch }) => {
  useEffect(() => {
    const uid = currentUser.uid;
    dispatch(workersFetchStart(uid));
    return () => dispatch(clearWorkers());
  }, [currentUser.uid, dispatch]);

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
        {workersCollection ? (
          workersCollection.map(work => (
            <WorkerEntry key={work.id} work={work} />
          ))
        ) : (
          <Loader loader />
        )}
      </div>
      <div className="workers-collection__footer"></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrentUser,
  workersCollection: selectWorkers
});

export default connect(mapStateToProps)(WorkersCollection);
