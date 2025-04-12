import React from 'react'
import OneLearnCircle from '../../Components/HomePage/OneLearnCircle'
import certi1 from "../../assets/certificateim.webp";

const Certificate = () => {
    return (

        <div className="bg-[#FAFAFA] pt-5 pb-16">
            <div className="text-center mt-10">
                <OneLearnCircle title="Get Certification" number="3" />
                <p className="text-xs md:text-base mt-2 font-poppins">
                    Internships and Course certifications for
                    <span className="text-blue-800"> Enhanced Skill Validation.</span>
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 xl:gap-28 w-full mt-16 ">
                <div className="flex-row justify-center items-center">
                    <p class="text-xl md:text-3xl font-bold text-center mb-3 text-[#343433]">
                        Internship Certificate
                    </p>
                    <img src={certi1} alt="certi1" loading="lazy" className="mx-auto w-4/5 lg:w-full" />
                </div>
                <div className="flex-row justify-center items-center">
                    <p class="text-xl md:text-3xl font-bold text-center mb-3 text-[#343433]">
                        Course Completion Certificate
                    </p>
                    <img src={certi1} alt="certi1" loading="lazy" className="mx-auto w-4/5 lg:w-full" />
                </div>
            </div>
        </div>




    )
}

export default Certificate
