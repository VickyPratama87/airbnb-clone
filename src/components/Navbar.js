import React from "react";
import logoAirbnb from "../assets/logo-airbnb.png";
import { BiWorld, BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-white px-6 md:px-10 lg:px-12 border-b sticky top-0">
        {/* Left */}
        <div className="flex h-20 py-6 cursor-pointer">
          <img src={logoAirbnb} alt="" className="object-cover" />
        </div>

        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative px-4 text-[#222] shadow-sm shadow-gray-400 border rounded-full hover:shadow-md duration-100 cursor-pointer">
          <input type="search" placeholder="" className="w-[18rem] py-[10px] rounded-full outline-0" />
          <div className="flex justify-between absolute left-1 text-[14px]">
            <button className="w-full px-5 font-medium">Anywhere</button>
            <button className="w-full px-6 font-medium border-r border-l border-x-2">Anyweek</button>
            <button className="w-full px-5 text-[#717171]">Addguest</button>
          </div>
          <div className="bg-[#FF385C] p-2 rounded-full -mr-2">
            <HiOutlineSearch className="w-full text-white" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 text-[#222] text-[14px]">
          <div className="py-2 px-3 rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <p className="font-medium">Airbnb your home</p>
          </div>
          <div className="p-2 mr-3 rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <BiWorld className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2 border py-2 px-2 rounded-full hover:shadow-md duration-150 cursor-pointer">
            <BiMenu className="w-5 h-5" />
            <FaUserCircle className="w-7 h-7 text-[#717171]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
