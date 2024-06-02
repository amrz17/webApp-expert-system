function Navbar() {
  return (
    <div className="navbar bg-base-100 flex text-white">
      <div className="flex-1 justify-start md:ml-8">
        <a className="btn btn-ghost text-xl">@ GOT TALENTS</a>
      </div>
      <div className="hidden md:flex mr-12">
        <ul className="menu menu-horizontal gap-8 text-base px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Start</a>
          </li>
          <li>
            <a>Result</a>
          </li>
        </ul>
      </div>
      <div className="navbar-start justify-end md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content z-[1] menu mt-1 shadow shadow-white bg-base-100 w-52 rounded-sm"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Start</a>
            </li>
            <li>
              <a>Result</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
