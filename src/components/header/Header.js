import NavBar from "../navBar";

const Header = ({ handleLogout }) => {
  return (
    <div>
      <h1>Ani-Fan</h1>
      <NavBar handleLogout={handleLogout} />
    </div>
  );
};

export default Header;
