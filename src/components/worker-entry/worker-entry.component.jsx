import React from "react";

import "./worker-entry.styles.scss";

const WorkerEntry = ({
  work: { firstname, surname, department, role, age, startDate, salary }
}) => {
  let date = Date(startDate * 1000);
  return (
    <div className="worker__entry">
      <div className="table__cell-1 table--cell">{`${firstname} ${surname}`}</div>
      <div className="table__cell-2 table--cell">{department}</div>
      <div className="table__cell-3 table--cell">{role}</div>
      <div className="table__cell-4 table--cell">{age}</div>
      <div className="table__cell-5 table--cell">{date}</div>
      <div className="table__cell-6 table--cell">{salary}</div>
    </div>
  );
};

export default WorkerEntry;
