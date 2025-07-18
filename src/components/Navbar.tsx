import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🏨 HotelBooker
        </Link>
        <div className="navbar-links">
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Hotels
          </Link>
          <Link 
            to="/bookings" 
            className={`navbar-link ${location.pathname === "/bookings" ? "active" : ""}`}
          >
            My Bookings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 