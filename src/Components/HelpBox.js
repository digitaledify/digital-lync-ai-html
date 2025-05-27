import React, { useState } from "react";
import { IoCallSharp, IoClose } from "react-icons/io5";

const HelpBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-50 justify-items-end bottom-24 right-5">
      {/* Info Box */}
      {isOpen && (
        <div className="w-[335px] h-[130px] bg-[#fff] border-b border-b-[#e2dfdf] shadow-lg rounded-[30px] mb-4">
          <div className="w-full h-[20px] px-[5%] py-[1.5em] overflow-hidden rounded-tl-[4px] rounded-tr-[4px] bg-[linear-gradient(-225deg,_#0d70bb_55%,_#ca0063)]">
            <span className="relative text-[#fff] text-xl font-medium -top-[14px] left-[14px]">
              Call Us (Or) Whatsapp Us
            </span>
          </div>
          <div className="pl-[10%] pr-[5%] py-[8%] text-[12px]">
            <a href="tel:+919515175554" className="text-2xl font-normal text-black">+91 9515175554</a>
          </div>
        </div>
      )}
      {/* Floating Button */}
      <button
        onClick={toggleBox}
        className="flex items-center justify-center rounded-tl-[34px] pt-[7px] pb-2.5 px-2.5 rounded-br-[34px] rounded-tr-[34px] rounded-bl-[8px] w-[60px] h-[60px] transition duration-300 bg-[#5301c7] shadow-lg hover:bg-blue-700"
      >
        {isOpen ? (
          <IoClose className="text-white" size={40} />
        ) : (
          <IoCallSharp className="text-white" size={30} />
        )}
      </button>
    </div>
  );
};

export default HelpBox;
