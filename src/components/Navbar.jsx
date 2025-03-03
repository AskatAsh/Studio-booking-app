import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">StudioBooking</a>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/studiolist">Studio List</Link>
            </li>
            <li>
              <Link to="/bookinglist">Studio Bookings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
