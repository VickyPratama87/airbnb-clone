import React from "react";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const RentalCard = ({ image, title, describe, date, price }) => {
  return (
    <>
      <div className="flex flex-col cursor-pointer">
        <img src={image} alt="" className="object-cover rounded-[.7rem]" />
        <div className="mt-2 flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <p className="flex">
            <FaStar />
            <FiStar />
            <FiStar />
          </p>
        </div>
        <p className="text-[#717171]">{describe}</p>
        <p className="text-[#717171]">{date}</p>
        <p className="mt-1">{price}</p>
      </div>
    </>
  );
};

export default RentalCard;
