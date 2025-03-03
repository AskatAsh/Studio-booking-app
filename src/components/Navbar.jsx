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
              <a>Studio List</a>
            </li>
            <li>
              <a>Studio Bookings</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
