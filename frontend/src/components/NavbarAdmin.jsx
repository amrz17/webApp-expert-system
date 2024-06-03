import { useState } from "react";
import SideBar from "./SideBar";

const NavbarAdmin = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-base-100">
      <div className="flex p-4 gap-10 items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenMenu((prev) => prev);
          }}
          className="md:hidden"
          type="button"
        >
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </button>
        <h1 className="text-white font-bold text-2xl">Dashboard Admin</h1>
      </div>
      {openMenu && <SideBar />}
    </header>
  );
};
export default NavbarAdmin;
