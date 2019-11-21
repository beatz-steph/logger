import React, { useState } from "react";
import { firestore, auth } from "../../firebase/firebase";

import DatePicker from "react-datepicker";
import CustomButton from "../custom-button/custom-button.component";

import "./add-worker-form.styles.scss";
import "react-datepicker/dist/react-datepicker.css";

const AddWorkerForm = () => {
  const { uid } = auth.currentUser;

  const [userCredentials, setUserCredentials] = useState({
    firstname: "",
    surname: "",
    email: "",
    department: "coconut",
    role: "lime",
    statrtDate: new Date(),
    age: "",
    salary: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleDate = date => {
    setUserCredentials({ ...userCredentials, statrtDate: date });
    console.log(date);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setUserCredentials({
      firstname: "",
      surname: "",
      email: "",
      department: "coconut",
      role: "lime",
      statrtDate: new Date(),
      age: "",
      salary: ""
    });
    firestore.collection(`users/${uid}/workers`).add(userCredentials);
  };

  const {
    firstname,
    surname,
    email,
    department,
    role,
    statrtDate,
    age,
    salary
  } = userCredentials;

  return (
    <form className="worker-form" onSubmit={handleSubmit}>
      <div className="worker-form__title">Add worker</div>
      <label className="worker-form__input">
        <span className="worker-form__input--label">First name:</span>
        <input
          type="text"
          value={firstname}
          onChange={handleChange}
          name="firstname"
          className="worker-form__input--field"
          required
        />
      </label>
      <label className="worker-form__input">
        <span className="worker-form__input--label">Surname:</span>
        <input
          type="text"
          value={surname}
          onChange={handleChange}
          name="surname"
          className="worker-form__input--field"
          required
        />
      </label>
      <label className="worker-form__input">
        <span className="worker-form__input--label">Email:</span>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          className="worker-form__input--field"
          required
        />
      </label>

      <label className="worker-form__input">
        <span className="worker-form__input--label">Select a department:</span>
        <select
          className="worker-form__input--field"
          required
          value={department}
          name="department"
          onChange={handleChange}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>

      <label className="worker-form__input">
        <span className="worker-form__input--label">
          Select role of worker:
        </span>
        <select
          className="worker-form__input--field"
          required
          value={role}
          name="role"
          onChange={handleChange}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>

      <label className="worker-form__input">
        <span className="worker-form__input--label">Age:</span>
        <input
          type="number"
          value={age}
          onChange={handleChange}
          name="age"
          className="worker-form__input--field"
          required
        />
      </label>
      <label className="worker-form__input">
        <span className="worker-form__input--label">Salary:</span>
        <input
          type="number"
          value={salary}
          onChange={handleChange}
          name="salary"
          className="worker-form__input--field"
          required
        />
      </label>
      <label className="worker-form__input">
        <span className="worker-form__input--label">Date of resumption</span>
        <DatePicker
          className="worker-form__input--field"
          required
          name="statrtDate"
          selected={statrtDate}
          onChange={handleDate}
        />
      </label>
      <CustomButton placeholder="Add worker" />
    </form>
  );
};

export default AddWorkerForm;
