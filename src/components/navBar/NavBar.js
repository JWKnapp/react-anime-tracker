import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../../libs/contextLib";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  function handleLogout() {
    userHasAuthenticated(false);
    console.log(history);
    history.push("/login");
  }

  console.log("in the navbar");
  console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
