import React from "react";

const Filter = ({ title, icon }) => {
  return (
    <>
      <div className="flex flex-col py-1 text-[#717171] text-[12px] items-center pb-2 hover:border-b-[3px] hover:text-black font-medium duration-200 cursor-pointer">
        {icon}
        {title}
      </div>
    </>
  );
};

export default Filter;
