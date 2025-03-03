import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            StudioBooking
          </NavLink>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/studiolist"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Studio List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookinglist"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Studio Bookings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
