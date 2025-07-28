import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo_img.png"
import { FaRegUser, FaSearch, } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";

const Navbar = () => {
    const links = (
        <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Shop</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
        </>
    )
  return (
    <div className="navbar bg-base-100 container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer md:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="hidden gap-12 list-none md:flex">
            {links}
        </div>
      </div>
      <div className="navbar-center">
        <img className="w-8 md:w-16 lg:w-20" src={logo} alt="" />
      </div>
      <div className="navbar-end flex items-center gap-4 md:gap-12">
        <p className="flex items-center gap-2 cursor-pointer">Login <span className="hidden md:block"><FaRegUser /></span></p>
        <p className="md:text-xl cursor-pointer"><FaSearch></FaSearch></p>
        <p className="text-[21px] md:text-2xl cursor-pointer"><TbShoppingBag /></p>
      </div>
    </div>
  );
};

export default Navbar;
