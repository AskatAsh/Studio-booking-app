import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
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
          Booking List
        </NavLink>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            StudioBooking
          </NavLink>
        </div>
        <nav className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </nav>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow right-0"
          >
            {navlinks}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
