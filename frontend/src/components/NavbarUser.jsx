import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Adjust the path to your file structure

function NavbarUser() {
  return (
    <div className="navbar bg-base-200 flex">
      <div className="flex-1 justify-start md:ml-8">
        <Link className="btn btn-ghost text-xl">@ GOT TALENTS</Link>
      </div>
      <div className="hidden md:flex mr-12">
        <ul className="menu menu-horizontal gap-8 text-base px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Start</Link>
          </li>
          <li>
            <Link>Result</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex mr-12">
        <ThemeToggle />
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
            className="dropdown-content z-[1] menu mt-1 shadow shadow-black bg-base-200
            w-52 rounded-sm"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Start</Link>
            </li>
            <li>
              <Link>Result</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarUser;
