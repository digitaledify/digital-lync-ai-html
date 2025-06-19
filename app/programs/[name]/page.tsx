"use client"
import React, { useState } from "react";
import rating from "../../../public/assets/rating.webp";
import { MdCheck } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { PiClockCountdown } from "react-icons/pi";
import { IoMdCloudDownload } from "react-icons/io";
import { useParams } from "next/navigation";
import { programsData } from "@/utils/CourseData";
import Image from "next/image";
import Compaines from "@/components/Home/Compaines";
import OneLearnCircle from "@/components/Home/OneLearnCircle";
import Accordion from "@/components/Courses/Accordion";
import LmsProject from "@/components/Home/LmsProject";
import Certificate from "@/components/Home/Certificate";
import GetJob from "@/components/Home/GetJob";
import GitHubProfile from "@/components/Home/GitHubProfile";
import ItEngineers from "@/components/Home/ItEngineers";
import UpcomingBatch from "@/components/Home/UpcomingBatch";
import WhyDigitalEdify from "@/components/Home/WhyDigitalEdify";
import OnlineTaining from "@/components/Home/OnlineTaining";
import OurLocations from "@/components/Home/OurLocations";
import WhyJavaTraining from "@/components/Programs/WhyJavaTraining";
import StartNowModal from "@/components/StartNowModal";
import LogoGrid from "@/components/Courses/LogoGrid";
import Courses from "@/components/Home/Courses";
import Programs from "@/components/Home/Programs";

const Program = () => {
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams();
    const name = params?.name as string;
    const Fundamentals = programsData?.filter((i) => i?.course === name)?.[0];
    const HeaderData = Fundamentals?.courseHeader;
    // const Data2 = [
    //     "Online & ClassRoom Real-Time training",
    //     "Project & Task Based Learning",
    //     "24/7 Learning Support with Dedicated Mentors",
    //     "Interviews, Jobs, and Placement Support",
    // ];

    return (
        <div className="bg-[#FAFDFC]">
            <div className="container px-2 mx-auto">
                <div className="flex flex-wrap pt-10 font-poppins">
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
                                            {index !== (Fundamentals?.courseList?.length ?? 0) - 1 && (
                                                <div className="border-[#01AC61] border-r h-[17px] w-[5px]"></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                {Fundamentals?.courseList?.map((item, index: number) => {
                                    return <p key={index} className="mt-1">{item}</p>;
                                })}
                            </div>
                        </div>

                        <div className="mt-5">
                            {Fundamentals?.policy?.map((item, index: number) => {
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
                                    <p className="flex items-center text-xs font-semibold md:text-2xl">
                                        {Fundamentals?.rating ? Fundamentals?.rating : "4.7"}{" "}
                                        <Image
                                            src={rating}
                                            alt="rating"
                                            className="hidden md:block"
                                            loading="lazy"
                                        />
                                        <p className="hidden md:block text-[10px] md:text-base text-gray-600 font-light">
                                            (500)
                                        </p>
                                    </p>
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
                                className="w-full rounded-md"
                                loading="lazy"
                            />
                        )}
                    </div>
                </div>
            </div>
            <WhyJavaTraining title={Fundamentals?.courseTitle} headerTitle={HeaderData} />

            <p className="text-xl md:text-3xl font-semibold text-[#343433] text-center mb-10 font-poppins mt-16">
                Our Alumni Work at Top Companies
            </p>

            <Compaines />

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

                    <p className="text-2xl md:text-4xl text-[#343433] font-semibold font-poppins text-center mt-5 mb-10">
                        TOOlS & PLATFORMS
                    </p>

                    <LogoGrid logos={Fundamentals?.imageData} />


                    {(name === "full_stack_python" || name === "full_stack_mern") && (
                        <div className="flex justify-center gap-8 pb-24 mt-10 uppercase">
                            <div className="flex">
                                <div className="px-5 py-4 bg-[#1554BB] w-fit text-white">
                                    <IoMdCloudDownload size={30} />
                                </div>
                                <div className="flex flex-col px-8 pt-2 text-lg leading-6 bg-white shadow-xl">
                                    <strong>Download</strong>
                                    <em>curriculum</em>
                                </div>
                            </div>
                            <div className="px-8 py-[18px] bg-[#1554BB] w-fit text-white">
                                SCHEDULE A DEMO
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative hcp">
                <Courses title="Our Trending Courses" />

                <Programs title="Our Trending Programs" />
                <div className="circlebgvoilet"></div>
                <div className="circlebgvoilet1"></div>
                <div className="circlebg"></div>
            </div>

            <OneLearnCircle title="Build" number="2" />
            <p className="mt-2 text-xs text-center md:text-base font-poppins">
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

            <OnlineTaining />

            <OurLocations />

            <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Program;