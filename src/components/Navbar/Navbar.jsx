import "./Navbar.css";
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <FaTasks className="logo-icon" />
          <div>
            <h1>Task Tracker</h1>
            <p>Manage your tasks efficiently</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;