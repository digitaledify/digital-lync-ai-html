import React from "react";
import { MdCheck } from "react-icons/md";

const HeroSection = ({ serviceData }) => {
  return (
    <div className=" py-12 border-t border-b border-gray-300 font-poppins subbanner">
      <div className="container mx-auto z-10 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12">
            <h3 className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-4xl font-semibold mb-4">
              {serviceData?.pageName}
            </h3>
            <p className="mb-4">
              <strong>{serviceData?.boldDescription}</strong>
              {serviceData?.description}
            </p>

            <div className="mt-5">
              {serviceData?.keyword?.map((item) => {
                return (
                  <div className="flex font-poppins gap-2 my-1.5">
                    <div className="w-[19px] h-[19px] rounded-full flex justify-end bg-gradient-to-b from-[#023892] to-[#4a78da]">
                      <MdCheck className="text-white text-[17px]" />
                    </div>
                    <p className=" text-gray-800">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {serviceData?.headerImage && (
            <div className="md:w-5/12 flex justify-center mt-8 md:mt-0">
              <div
                className="inline-block p-6 bg-gradient-to-r from-pink-600 to-blue-600"
                style={{
                  borderRadius:
                    serviceData?.imagePosition === "br"
                      ? "50% 50% 5% 50%"
                      : serviceData?.imagePosition === "bl"
                        ? "50% 50% 50% 5%"
                        : serviceData?.imagePosition === "tr"
                          ? "50% 5% 50% 50%"
                          : "5% 50% 50% 50%",
                }}
              >
                <img
                  src={serviceData?.headerImage}
                  alt="About Us"
                  className="rounded-full w-64 h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
