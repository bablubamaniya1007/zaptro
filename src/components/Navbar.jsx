import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
/*npm i lucide command for MapPin and npm i icons for react iconns */
function Navbar() {
  const location = false;

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-7 items-center ">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        {/* manu section  */}
        <nav className="flex gap-7 items-center ">
          <ul className="flex items-center text-xl gap-7 font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              {" "}
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              {" "}
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative ">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm ">
              0
            </span>
          </Link>

          {/* create acount in the clerk.com becouse we use clerk  */}
          <div className="">
            <SignedOut >
              <SignInButton className="bg-red-500 py-1 px-3 text-white rounded-full cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
