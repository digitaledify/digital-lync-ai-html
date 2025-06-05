"use client"
import React, { useState } from 'react'
import { CgImage } from 'react-icons/cg';
import { PiBagFill } from 'react-icons/pi';
import { HiDocumentText } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import global from "../../public/assets/globe.webp";
import Image from 'next/image';
import WhiteButton from '../WhiteButton';
import StartNowModal from '../StartNowModal';

const GitHubProfile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const getJObData = [
        {
            name: "GitHub Profile",
            disc: "Guidance on creating and maintaining a professional GitHub profile to showcase technical projects and coding prowess.",
            icon: <FaGithub size={17} />,
        },
        {
            name: "LinkedIn Profile",
            disc: "Assistance in crafting a compelling LinkedIn profile for networking and visibility among recruiters.",
            icon: <FaLinkedin size={17} />,
        },
        {
            name: "Resume Preparation",
            disc: "Expert advice on resume writing to effectively highlight skills, experience, and achievements.",
            icon: <HiDocumentText size={17} />,
        },
        {
            name: "Help in Applying",
            disc: "Support in identifying suitable job opportunities and navigating the application process.",
            icon: <PiBagFill size={17} />,
        },
    ];

    return (
        <div className="relative flex justify-between w-full p-3 mt-10 md:mt-32">
            <div className="z-10 md:ml-10">
                {getJObData.map((item, index: number) => {
                    return (
                        <div key={index} className="flex justify-center w-full mx-auto md:justify-between font-poppins">
                            <div className="flex-row items-center hidden md:block">
                                <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
                                <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
                                <div className="border-dashed border-gray-400 border-r h-[130px] w-[8px]"></div>
                            </div>
                            <div className="pt-8 pl-7">
                                <div className="flex items-center ">
                                    <div className="bg-white border p-1.5 rounded-md">
                                        {item.icon}
                                    </div>
                                </div>
                                <p className="text-lg md:text-[22px] font-bold mt-5">
                                    {item.name}
                                </p>
                                <p className="mt-3 md:w-[500px]">{item.disc}</p>
                            </div>
                        </div>
                    );
                })}
                <div className="mt-10 ml-7 md:ml-12">
                    <WhiteButton name='Contact Course Advisor' icon={<CgImage size={17} />} onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            <Image
                src={global}
                alt="global"
                className="absolute right-0 hidden md:block h-[550px] lg:h-full "
                priority
            />
            {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    )
}

export default GitHubProfile