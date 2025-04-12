import React, { useState } from "react";
import RoundedButoon from "../../Components/RoundedButoon";
import { HiArrowSmRight } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { FaCodepen } from "react-icons/fa6";
import img1 from "../../assets/code1.webp";
import img2 from "../../assets/crm.webp";
import img3 from "../../assets/hrms.webp";
import StartNowModal from "../../Components/HomePage/StartNowModal";

const LmsProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="container grid w-full grid-cols-1 px-2 mx-auto mt-8 md:grid-cols-2 font-poppins">
        <div className="flex justify-center w-full mx-auto md:justify-between">
          <div className="bg-white md:mr-10 h-fit">
            <img
              src={img1}
              alt="LMS Project"
              title="LMS Project"
              className="mx-auto"
              loading="lazy"
            />
          </div>
          <div className="flex-row items-center hidden md:block">
            <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
            <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
            <div className="border-dashed border-gray-400 border-r h-[328px] lg:h-64 xl:h-56 w-[8px]"></div>
          </div>
        </div>
        <div className="w-full px-3 py-10 md:pl-12 md:pt-16 md:pb-10">
          <div className="flex items-center mb-2">
            <div className="bg-white border p-1.5 rounded-md">
              <FaCodepen className="text-gray-600" size={17} />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2 text-[#343433]">LMS Project</h4>
          <p className="mb-6 text-sm w-fit">
            An LMS project develops a digital platform for online
            learning,featuring course creation, content management, user
            tracking,assessments, and reporting, aimed at enhancing educational
            interaction.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <RoundedButoon
              name="View Project"
              icon={<HiArrowSmRight size={20} />}
              theme="gray"
              onClick={() => setIsOpen(!isOpen)}
            />
            <RoundedButoon
              name="View All Courses"
              icon={<VscGraph size={17} />}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>

      <div className="container grid w-full grid-cols-1 px-2 mx-auto md:grid-cols-2 font-poppins">
        <div className="flex justify-center w-full mx-auto md:justify-between">
          <div className="bg-white md:mr-10 h-fit">
            <img
              src={img2}
              alt="LMS Project"
              title="LMS Project"
              className="mx-auto"
              loading="lazy"
            />
          </div>
          <div className="flex-row items-center hidden md:block">
            <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
            <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
            <div className="border-dashed border-gray-400 border-r h-[328px] lg:h-64 xl:h-[333px] w-[8px]"></div>
          </div>
        </div>
        <div className="w-full px-3 py-10 md:pl-12 md:pt-16 md:pb-10">
          <div className="flex items-center mb-2">
            <div className="bg-white border p-1.5 rounded-md">
              <FaCodepen className="text-gray-600" size={17} />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2 text-[#343433]">
            HRMS Project
          </h4>
          <p className="mb-6 text-sm w-fit">
            The HRMS project develops a digital system for managing HR functions
            like employee data, payroll, recruitment, and performance, aiming to
            streamline processes and enhance organizational efficiency.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <RoundedButoon
              name="View Project"
              icon={<HiArrowSmRight size={20} />}
              theme="gray"
              onClick={() => setIsOpen(!isOpen)}
            />
            <RoundedButoon
              name="View All Courses"
              icon={<VscGraph size={17} />}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>

      <div className="container grid w-full grid-cols-1 px-2 mx-auto md:grid-cols-2 font-poppins">
        <div className="flex justify-center w-full mx-auto md:justify-between">
          <div className="bg-white md:mr-10 h-fit">
            <img
              src={img3}
              alt="LMS Project"
              title="LMS Project"
              className="pt-4 pb-10 pl-5 pr-5 md:pt-10"
              loading="lazy"
            />
          </div>
          <div className="flex-row items-center hidden md:block">
            <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
            <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
            <div className="border-dashed border-gray-400 border-r h-[328px] lg:h-64 xl:h-[333px] w-[8px]"></div>
          </div>
        </div>
        <div className="w-full px-3 py-10 md:pl-12 md:pt-16 md:pb-10">
          <div className="flex items-center mb-2">
            <div className="bg-white border p-1.5 rounded-md">
              <FaCodepen className="text-gray-600" size={17} />
            </div>
          </div>
          <h4 className="text-xl font-bold mb-2 text-[#343433]">CRM Project</h4>
          <p className="mb-6 text-sm w-fit">
            A CRM project develops a system to manage company interactions with
            customers, incorporating tools for contact, sales, productivity, and
            support to enhance service, drive sales, and boost retention.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <RoundedButoon
              name="View Project"
              icon={<HiArrowSmRight size={20} />}
              theme="gray"
              onClick={() => setIsOpen(!isOpen)}
            />
            <RoundedButoon
              name="View All Courses"
              icon={<VscGraph size={17} />}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default LmsProject;
