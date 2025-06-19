import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'

interface EngineerData {
    id: string | number;
    profilePic: string | StaticImageData;
    name: string;
    role: string;
    companyLogo: string | StaticImageData;
    company: string;
}


const EngineerCard = ({ data }: { data: EngineerData }) => {
    return (
        <div
            key={data.id}
            className="relative flex flex-col items-center bg-white shadow-xl rounded-sm p-6 w-[285px] font-poppins"
            style={{ boxShadow: "#00000029 0 0 11px" }}
        >
            <div className="absolute w-20 h-20 transform -translate-x-1/2 -top-10 left-1/2">
                <Image
                    src={data?.profilePic}
                    alt={data?.name || "EngineerCard"}
                    className="object-cover w-full h-full rounded-full"
                    priority
                />
                <div className="absolute bottom-3 left-[85%] transform -translate-x-1/2 bg-white p-1 border border-[#DDDD] rounded-full">
                    <FaLinkedinIn size={14} />
                </div>
            </div>

            <h4 className="text-lg font-semibold text-center mt-9">
                {data?.name}
            </h4>
            <h5 className="mt-1 text-sm text-center text-gray-700">
                {data?.role}
            </h5>
            <Image
                src={data.companyLogo}
                alt={data?.company || "EngineerCard"}
                className="object-contain mt-4"
                priority
            />
        </div>
    )
}

export default EngineerCard
