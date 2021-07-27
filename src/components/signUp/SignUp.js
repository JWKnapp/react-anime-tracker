import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SignUp = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password || !firstName || !lastName) {
      alert("Please fill out entire form");
      return;
    }
    console.log("signed up");
    onSignup({ firstName, lastName, email, password });
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          autoFocus
          placeholder=""
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          autoFocus
          placeholder=""
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          autoFocus
          placeholder="youremail@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="pass-wrapper">
          <label>Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
        <input
          className="btn btn-block"
          type="submit"
          value="Submit"
          disabled={!validateForm()}
        />
      </form>
    </div>
  );
};

export default SignUp;
