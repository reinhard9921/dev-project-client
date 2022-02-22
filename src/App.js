import "./App.css";
import React from "react";
import Axios from "axios";
const useState = React.useState;

function AddUserApp() {
  /*VARIABLES*/
  const [_userName, set_userName] = useState();
  const [_userHeight, set_userHeight] = useState();
  const [_userEmail, set_userEmail] = useState();
  const [_emailError, set_EmailError] = useState();
  const [_heightError, set_heightError] = useState();
  const [_nameError, set_nameError] = useState();

  /*FUNCTIONS */
  function emailValidation(e) {
    e.preventDefault();

    const regexemail =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!_userEmail || regexemail.test(_userEmail) === false) {
      set_EmailError("Enter valid email");
    }

    const regexNumber = /^[0-9\b]+$/;
    if (!_userHeight || regexNumber.test(_userHeight) === false) {
      set_heightError("Enter valid number");
    }

    if (!_userName) {
      set_nameError("Enter a name");
    }

    if (
      _userName &&
      _userHeight &&
      regexNumber.test(_userHeight) === true &&
      _userEmail &&
      regexemail.test(_userEmail) === true
    ) {
      handleSubmit();
    }
  }

  function handleSubmit() {
    var params = new URLSearchParams();
    params.append("name", _userName);
    params.append("height", _userHeight);
    params.append("email", _userEmail);
    Axios.post(
      "https://serverside-project-dev.herokuapp.com/api/insertuser",
      params
    );
    set_userName("");
    set_userHeight("");
    set_userEmail("");
    set_EmailError("");
    set_heightError("");
    set_nameError("");
  }

  /*RETRUN */
  return (
    <div className="page_wrap">
      <form onSubmit={emailValidation}>
        <br />
        <h2>Please enter your height</h2>
        <h3>For a email with your height compared to our average</h3>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          value={_userName}
          placeholder="John"
          onChange={(e) => set_userName(e.target.value)}
        ></input>
        <br />
        <span>{_nameError}</span>
        <br />
        <label htmlFor="height">Height (cm):</label>
        <br />
        <input
          type="text"
          value={_userHeight}
          placeholder="178"
          onChange={(e) => set_userHeight(e.target.value)}
        ></input>
        <br />
        <span>{_heightError}</span>
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          value={_userEmail}
          placeholder="john04@gmail.com"
          onChange={(e) => set_userEmail(e.target.value)}
        ></input>
        <br />
        <span>{_emailError}</span>
        <br />
        <br />

        <button variant="primary">Submit Info</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default AddUserApp;
