import React from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { GiPalmTree, GiCampingTent } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { IoBoatSharp, IoFilterOutline } from "react-icons/io5";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    {
      title: "Amazing pools",
      icon: <FaSwimmingPool className="w-6 h-6" />,
    },
    {
      title: "Tropical",
      icon: <GiPalmTree className="w-6 h-6" />,
    },
    {
      title: "Camping",
      icon: <GiCampingTent className="w-6 h-6" />,
    },
    {
      title: "Amazing pools",
      icon: <FaSwimmingPool className="w-6 h-6" />,
    },
    {
      title: "Tropical",
      icon: <GiPalmTree className="w-6 h-6" />,
    },
    {
      title: "Camping",
      icon: <GiCampingTent className="w-6 h-6" />,
    },
    {
      title: "Tiny Homes",
      icon: <HiOutlineHomeModern className="w-6 h-6" />,
    },
    {
      title: "Beach",
      icon: <FaUmbrellaBeach className="w-6 h-6" />,
    },
    {
      title: "Breakfast",
      icon: <MdOutlineFreeBreakfast className="w-6 h-6" />,
    },
    {
      title: "Boats",
      icon: <IoBoatSharp className="w-6 h-6" />,
    },
    {
      title: "Beach",
      icon: <FaUmbrellaBeach className="w-6 h-6" />,
    },
    {
      title: "Breakfast",
      icon: <MdOutlineFreeBreakfast className="w-6 h-6" />,
    },
  ];
  return (
    <>
      <div className="w-full sticky top-[80.5px] bg-white flex justify-between gap-10 py-6 px-6 sm:px-8 md:px-10 lg:px-12 truncate">
        {sorting.map((sort) => (
          <Filter title={sort.title} icon={sort.icon} />
        ))}
        <div className="hidden w-24 h-14 md:flex items-center justify-center gap-3 border rounded-[.7rem] font-medium text-[#717171] hover:border-black hover:text-black duration-200 cursor-pointer">
          <IoFilterOutline className="w-3 h-3" />
          <p className="text-[12px]">Filters</p>
        </div>
      </div>
    </>
  );
};

export default Filters;
