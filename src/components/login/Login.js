import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../libs/contextLib";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { userHasAuthenticated } = useAppContext();
  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill out email & password");
      return;
    }
    console.log("signed in");
    const userStatus = onLogin({ email: email, password: password });
    console.log("user status:", userStatus);
    if (userStatus) {
      userHasAuthenticated(true);
    } else {
      console.log("user does not exist");
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
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

export default Login;
