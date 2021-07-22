import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ handleLogout }) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div>
      {isAuthenticated ? (
        <Link onClick={handleLogout}>Logout</Link>
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
