import React from "react";
import { MdCheck } from "react-icons/md";
import blog7 from "../../public/assets/blog7.jpg";
import Image from "next/image";

const HeroSection = ({ name, disc, boldDisc }: { name: string, disc: string, boldDisc: string }) => {
    const Data2 = [
        "Experienced Instructors",
        "State-of-the-Art Facilities",
        "Comprehensive Curriculum",
        "Industry Partnerships",
        "Personalized Support",
        "Proven Success Record",
    ];

    return (
        <div className="py-12 border-t border-b border-gray-300 font-poppins subbanner">
            <div className="container z-10 px-4 mx-auto">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:w-7/12">
                        <h3 className="mb-4 text-4xl font-semibold text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text">
                            {name}
                        </h3>
                        <p className="mb-4">
                            <strong>{boldDisc}</strong>
                            {disc}
                        </p>
                        <p className="font-semibold">Key Highlights</p>

                        <div className="mt-5">
                            {Data2.map((item, index: number) => {
                                return (
                                    <div key={index} className="flex font-poppins gap-2 my-1.5">
                                        <div className="w-[19px] h-[19px] rounded-full flex justify-end bg-gradient-to-b from-[#023892] to-[#4a78da]">
                                            <MdCheck className="text-white text-[17px]" />
                                        </div>
                                        <p className="text-gray-800 ">{item}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 md:w-5/12 md:mt-0">
                        <div
                            className="inline-block p-6 bg-gradient-to-r from-pink-600 to-blue-600"
                            style={{ borderRadius: " 50% 50% 05%" }}
                        >
                            <Image
                                src={blog7}
                                alt="About Us"
                                className="object-cover w-64 h-64 rounded-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
