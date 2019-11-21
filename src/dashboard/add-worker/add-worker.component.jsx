import React from "react";

import AddWorkerForm from "../../components/add-worker-form/add-worker-form.component";

import "./add-worker.styles.scss";

const AddWorkerPage = () => (
  <div className="add-worker-page">
    <div className="form-title">
      <AddWorkerForm />
    </div>
  </div>
);

export default AddWorkerPage;
