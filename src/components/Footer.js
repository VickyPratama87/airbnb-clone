import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { RiArrowDropUpLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="bg-white h-5 flex justify-between items-center px-6 md:px-10 lg:px-12 border-t sticky bottom-0 py-6">
        <div className="flex gap-3 text-[14px] text-[#717171]">
          <p>&copy; 2023 Airbnb, Inc.</p>
          <p>&#x2022; Terms</p>
          <p>&#x2022; Sitemap</p>
          <p>&#x2022; Privacy</p>
          <p>&#x2022; Your Privacy Choices</p>
          <p>&#x2022; Destinations</p>
        </div>
        <div className="flex items-center gap-7 text-[14px] font-medium">
          <p className="flex items-center">
            <HiOutlineGlobeAlt className="w-5 h-5 mr-2" />
            English
          </p>

          <p>$ USD</p>
          <div className="flex items-center">
            <p>Support and resources</p>
            <RiArrowDropUpLine className="w-10 h-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
