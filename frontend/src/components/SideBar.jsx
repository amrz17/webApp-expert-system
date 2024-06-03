import { navLinkAdmin } from "../constants";

const SideBar = () => {
  return (
    <div
      className="flex md:hidden absolute top-16 left-0 bg-gray-100 
      w-[220px] h-screen py-10 font-spaceMono "
    >
      <ul
        className="flex flex-col gap-8 px-4 w-full 
        text-gray-800 font-bold text-xl "
      >
        {navLinkAdmin.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
