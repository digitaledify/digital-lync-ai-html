import React, { useEffect, useState } from "react";
import { MdOutlineLaptop, MdPerson } from "react-icons/md";
import WhiteButton from "../../Components/WhiteButton";
import StartNowModal from "../../Components/HomePage/StartNowModal";

const IndiaInstitute = () => {
  const textItems = [
    {
      text: "Learn.",
      color: "from-[#006dbd] to-[#002cd4] bg-clip-text text-transparent",
    },
    {
      text: "Build.",
      color: "from-[#5e00c8] to-[#ac008e] bg-clip-text text-transparent",
    },
    {
      text: "Get Job.",
      color: "from-[#ac008e] to-[#cd0064] bg-clip-text text-transparent",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 1000); // Changes every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [textItems.length]);

  return (
    <>
      <div className="px-5 mt-8 mb-16  md:mt-12 lg:mt-16 md:mb-32 justify-items-center font-poppins">
        <h4 className="text-2xl md:text-4xl lg:text-4xl font-medium text-center text-[#343433] leading-9">
          India's #1 Premium Training Institute
        </h4>
        <div className="flex flex-wrap font-bold justify-center gap-3 lg:gap-5 mb-2.5 leading-[45px] md:leading-[130px] mt-7 md:mt-5">
          {textItems.map((item, index) => (
            <h1
              key={index}
              className={`bg-gradient-to-r ${
                index === activeIndex ? item.color : "text-black "
              } text-[50px] md:text-[115px] font-extrabold `}
            >
              {item.text}
            </h1>
          ))}
        </div>
        <p className="max-w-xl mb-12 text-base leading-8 text-center mt-7 md:mt-6 md:text-lg">
          100000+ uplifted through our hybrid classroom & online training,
          enriched by real-time projects and job support.
        </p>
        <div className="flex flex-wrap justify-center gap-2 lg:space-x-4">
          {/* Join Free Demo Button */}

          {/* <BlackButton
            name="Join Free Demo"
            icon={<MdOutlineLaptop className="text-sm lg:text-xl" />}
          /> */}
          <button
            className="flex gap-2 lg:gap-3 text-xs lg:text-sm items-center px-2.5 lg:px-4 py-3 lg:py-2 bg-black text-white font-semibold rounded-lg hover:bg-sky-500 min-w-36 lg:min-w-44 justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdOutlineLaptop className="text-sm lg:text-xl" />
            {"Join Free Demo"}
          </button>

          {/* Contact Course Advisor Button */}
          <WhiteButton
            name="Contact Course Advisor"
            icon={<MdPerson className="text-sm lg:text-2xl" />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="mt-24">
          <h2 className="text-center mb-2.5 text-lg md:text-2xl font-extrabold md:tracking-widest text-[#555]">
            Your Path to a Successful IT Career
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-base mb-2.5 md:mb-5 text-center text-[#212529]">
            Our Alumni Work at Top Compaines
          </p>
          {/* <Compaines /> */}
        </div>
      </div>
      {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default IndiaInstitute;
