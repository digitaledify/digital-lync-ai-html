import React from "react";

const WhyChooseCard = ({ data }) => {
  return (
    <ul className="about-list list-none container font-poppins">
      <li className="px-2.5 pb-10">
        <div className="!xb-item--inner relative p-8 bg-[#EDF3F5] border border-gray-200 rounded-xl overflow-hidden -z-[1]">
          <div className="absolute bg-white w-[45px] h-[105px] -z-[1] -top-2 left-0 -rotate-45 rounded-3xl" />
          <div className="absolute top-12 left-6 w-9 h-9 bg-[#FE6C3F] text-white font-bold flex items-center justify-center rounded-full shadow-md">
            {data.number}
          </div>
          <div className="xb-item--holder pl-14">
            <h3 className="xb-item--title md:text-2xl font-medium mb-2.5">
              {data.title}
            </h3>
            <div className="xb-item--description text-xs md:text-base">
              {data.description}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default WhyChooseCard;
