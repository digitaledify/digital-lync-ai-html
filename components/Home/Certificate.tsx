import React from 'react'
import certi1 from "../../public/assets/certificateim.webp";
import OneLearnCircle from './OneLearnCircle';
import Image from 'next/image';

const Certificate = () => {
    return (

        <div className="bg-[#FAFAFA] pt-5 pb-16">
            <div className="mt-10 text-center">
                <OneLearnCircle title="Get Certification" number="3" />
                <p className="mt-2 text-xs md:text-base font-poppins">
                    Internships and Course certifications for
                    <span className="text-blue-800"> Enhanced Skill Validation.</span>
                </p>
            </div>
            <div className="container justify-center w-full gap-10 mt-16 xl:gap-28 grid grid-cols-1 md:grid-cols-2">
                <div className="flex-row items-center justify-center">
                    <p className="text-xl md:text-3xl font-bold text-center mb-3 text-[#343433]">
                        Internship Certificate
                    </p>
                    <Image src={certi1} alt="certi1" priority className="w-4/5 mx-auto lg:w-full" />
                </div>
                <div className="flex-row items-center justify-center">
                    <p className="text-xl md:text-3xl font-bold text-center mb-3 text-[#343433]">
                        Course Completion Certificate
                    </p>
                    <Image src={certi1} alt="certi1" priority className="w-4/5 mx-auto lg:w-full" />
                </div>
            </div>
        </div>




    )
}

export default Certificate
