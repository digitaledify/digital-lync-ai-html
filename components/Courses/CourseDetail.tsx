"use client"
import Accordion from "@/components/Courses/Accordion";
import Certificate from "@/components/Courses/Certificate";
import Compaines from "@/components/Home/Compaines";
import OnlineTaining from "@/components/Home/OnlineTaining";
import OurLocations from "@/components/Home/OurLocations";
import WhyDigitalEdify from "@/components/Home/WhyDigitalEdify";
import { courseData } from "@/utils/CourseData"; 
import { MdCheck } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { PiClockCountdown } from "react-icons/pi";
import rating from "@/public/assets/rating.webp";
import Image from "next/image";
import { useState } from "react";
import WhyJavaTraining from "@/components/Courses/WhyJavaTraining";
import OneLearnCircle from "@/components/Home/OneLearnCircle";
import LogoGrid from "@/components/Courses/LogoGrid";
import Courses from "@/components/Home/Courses";
import Programs from "@/components/Home/Programs";
import LmsProject from "@/components/Home/LmsProject";
import GetJob from "@/components/Home/GetJob";
import GitHubProfile from "@/components/Home/GitHubProfile";
import ItEngineers from "@/components/Home/ItEngineers";
import UpcomingBatch from "@/components/Home/UpcomingBatch";
import StartNowModal from "@/components/StartNowModal";
 

const CourseDetail = ({ coursesName }: { coursesName: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Fundamentals = courseData.find((i) => i.course === coursesName);

  if (!Fundamentals) return <p>Course not found</p>;

  return (
    <>
      
      <div className="container px-2 mx-auto">
        <div className="flex flex-wrap mt-5 font-poppins">
          {/* Left Column */}
          <div className="w-full p-4 lg:w-1/2">
            <div className="text-2xl md:text-4xl font-extrabold mb-4 text-[#212529] ">
              {Fundamentals?.headerTitle}
            </div>
            <div className="flex gap-2.5">
              <div className="mt-3.5">
                {Fundamentals?.courseList?.map((item, index: number) => {
                  return (
                    <div key={index} className="flex-row items-center justify-center">
                      <div className="bg-[#01AC61] rounded-full w-2.5 h-2.5"></div>
                      {Fundamentals?.courseList && index !== Fundamentals?.courseList?.length - 1 && (
                        <div className="border-[#01AC61] border-r h-[17px] w-[5px]"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                {Fundamentals?.courseList?.map((item, index: number) => {
                  return <p className="mt-1" key={index}>{item}</p>;
                })}
              </div>
            </div>

            <div className="mt-5">
              {Fundamentals?.policy && Fundamentals?.policy?.map((item, index: number) => {
                return (
                  <div key={index} className="flex font-poppins gap-2 my-1.5">
                    <div className="w-[19px] h-[19px] rounded-full flex justify-end bg-gradient-to-b from-[#023892] to-[#4a78da]">
                      <MdCheck className="text-white text-[17px]" />
                    </div>
                    <p className="text-sm font-light text-gray-800">{item}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-start py-4 font-poppins">
              <div className="border-r border-[#5080CC] pr-3">
                <LuUserPlus className="my-2 text-2xl md:text-3xl" />
              </div>
              <div className="flex items-center gap-2 border-r border-[#5080CC] px-3">
                <div>
                  <p className="text-xs font-semibold md:text-2xl">50000 +</p>
                  <p className=" text-[10px] md:text-base text-gray-600 font-light">
                    Students Enrolled
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-r border-[#5080CC] px-3">
                <div>
                  <div className="flex items-center text-xs font-semibold md:text-2xl">
                    {Fundamentals?.rating ? Fundamentals?.rating : "4.7"}{" "}
                    <Image
                      src={rating}
                      alt="rating"
                      className="hidden md:block"
                      priority
                    />
                    <p className="hidden md:block text-[10px] md:text-base text-gray-600 font-light">
                      (500)
                    </p>
                  </div>
                  <p className="  text-[10px] md:text-base text-gray-600 font-light">
                    Ratings
                  </p>
                </div>
                <PiClockCountdown className="text-2xl md:text-4xl ms-2" />
              </div>
              <div className="flex items-center gap-2 px-3">
                <div>
                  <p className="text-xs font-semibold md:text-2xl">{Fundamentals?.duration ? Fundamentals?.duration : "60 Days"}</p>
                  <p className=" text-[10px] md:text-base text-gray-600 font-light">
                    Duration
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-3 md:justify-start">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Java Training"
                className="bg-[#1554BB] text-sm md:text-base text-white px-7 py-2.5 rounded-full font-poppins font-medium"
              >
                SCHEDULE ONLINE DEMO
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Java Training"
                className="bg-white border text-sm md:text-base border-[#1554BB] text-[#1554BB] px-7 py-2.5 rounded-full font-poppins font-medium"
              >
                CONTACT COURSE ADVISER
              </button>
            </div>
          </div>

          <div className="flex justify-end w-full p-4 lg:w-1/2">
            {Fundamentals?.headerImage && (
              <Image
                src={Fundamentals?.headerImage}
                alt="DevOps"
                title="DevOps"
                className="w-full rounded-md h-fit"
                priority
              />
            )}
          </div>
        </div>
      </div>


      <WhyJavaTraining title={Fundamentals?.courseTitle} headerTitle={Fundamentals?.courseHeader} />

      <p className="text-xl md:text-3xl font-semibold text-[#343433] text-center mb-10 font-poppins mt-16">
        Our Alumni Work at Top Companies
      </p>

      <Compaines />
      {/* <About /> */}
      {/* <WhyDigitalEdify /> */}

      <div className="bg-[#F5F5F5] pt-8">
        <div className="container px-2 mx-auto">
          <OneLearnCircle
            title="Learn"
            number="1"
            mainTitle="Explore the Digital Edify way"
          />
          <p className="mt-2 text-xs text-center md:text-base font-poppins">
            Learn from Curated Curriculums{" "}
            <span className="text-blue-800">developed by Industry Experts</span>
          </p>

          <p className="text-2xl font-semibold text-center md:text-4xl font-poppins mt-7 md:mt-16">
            {Fundamentals?.title}
          </p>
          <p className="mt-3 mb-16 text-sm text-center md:text-base font-poppins">
            {Fundamentals?.subTitle}
          </p>

          <Accordion data={Fundamentals} />

          {Fundamentals?.imageData && Fundamentals?.imageData?.length > 0 && (
            <p className="text-2xl md:text-4xl text-[#343433] font-semibold font-poppins text-center mt-5 mb-10">
              TOOlS & PLATFORMS
            </p>
          )}

          <LogoGrid logos={Fundamentals?.imageData} />
        </div>
      </div>

      <Courses title="Our Trending Courses" />

      <Programs title="Our Trending Programs" />

      <OneLearnCircle title="Build" number="2" />
      <p className="text-xs text-center md:text-base font-poppins">
        Work on our Real-time{" "}
        <span className="text-blue-800">Projects , Task Based</span>
      </p>

      <LmsProject />

      <Certificate />

      <GetJob />

      <GitHubProfile />
      <ItEngineers />

      <UpcomingBatch />

      <WhyDigitalEdify />

      {/* <ToolsPlatforms data={Fundamentals?.imageData ?? []} /> */}
      <OnlineTaining />
      <OurLocations />
      <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default CourseDetail;
