import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'

const EngineerCard = ({ data }) => {
    return (
        <div
            key={data.id}
            className="relative flex flex-col items-center bg-white shadow-xl rounded-sm p-6 w-[285px] font-poppins"
            style={{ boxShadow: "#00000029 0 0 11px" }}
        >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
                <img
                    src={data?.profilePic}
                    alt={data?.name || "EngineerCard"}
                    className="rounded-full object-cover w-full h-full"
                    loading="lazy"
                />
                <div className="absolute bottom-3 left-[85%] transform -translate-x-1/2 bg-white p-1 border border-[#DDDD] rounded-full">
                    <FaLinkedinIn size={14} />
                </div>
            </div>

            <h4 className="mt-9 font-semibold text-lg text-center">
                {data?.name}
            </h4>
            <h5 className="text-sm text-center text-gray-700 mt-1">
                {data?.role}
            </h5>
            <img
                src={data.companyLogo}
                alt={data?.company || "EngineerCard"}
                className="mt-4 object-contain"
                loading="lazy"
            />
        </div>
    )
}

export default EngineerCard
