import { navLinkAdmin } from "../constants";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="flex items-center">
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </div>
      <div
        className="flex md:hidden absolute top-16 left-0 bg-gray-100 
      w-[220px] h-screen py-10 font-spaceMono "
      >
        <ul
          className="flex flex-col gap-8 px-4 w-full 
        text-gray-800 font-bold text-xl "
        >
          {navLinkAdmin.map((item) => (
            <li key={item.label} className="hover:underline">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideBar;
