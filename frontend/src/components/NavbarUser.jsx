import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Adjust the path to your file structure

function NavbarUser() {
  return (
    <div className="navbar bg-base-200 flex">
      <div className="flex-1 justify-start md:ml-8">
        <Link to="/" className="btn btn-ghost text-xl">
          @ GOT TALENTS
        </Link>
      </div>
      <div className="hidden md:flex mr-12">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default NavbarUser;
