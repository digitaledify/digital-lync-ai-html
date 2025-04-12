import React from "react";

const ChooseCard = ({ serviceData }) => {
  return (
    <div>
      <h3 class="text-center text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-16 mb-2.5">
        {serviceData?.title}
      </h3>
      <div class="font-poppins flex justify-center mb-16">
        <p className="md:w-2/3 text-center">{serviceData?.subTitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 container mb-5">
        {serviceData?.bulletPoints?.map((item, index) => {
          return (
            <ul className="about-list list-none container font-poppins">
              <li className="px-2.5 pb-10">
                <div className="!xb-item--inner relative p-8 bg-[#EDF3F5] border border-gray-200 rounded-xl overflow-hidden -z-[1]">
                  <div className="absolute bg-white w-[45px] h-[105px] -z-[1] -top-2 left-0 -rotate-45 rounded-3xl" />
                  <div className="absolute top-12 left-6 w-9 h-9 bg-[#FE6C3F] text-white font-bold flex items-center justify-center rounded-full shadow-md">
                    {index + 1}
                  </div>
                  <div className="xb-item--holder pl-14">
                    <h3 className="xb-item--title md:text-2xl font-medium mb-2.5">
                      {item?.title}
                    </h3>
                    <div className="xb-item--description text-xs md:text-base">
                      {item?.description}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseCard;
