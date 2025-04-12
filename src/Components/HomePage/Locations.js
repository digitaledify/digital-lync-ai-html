import React from 'react'

const Locations = ({ data }) => {
    return (
        <div
            key={data?.id}
            className="bg-white rounded-xl cursor-pointer w-[280px] md:w-[340px] lg:w-[390px]"
            style={{ boxShadow: "#E7E7E7 0px 2px 20px" }}
        >
            <img
                src={data?.image}
                alt={data?.title || "Locations"}
                className="rounded-t-lg object-cover w-full h-[14rem] font-[1.25rem] hidden md:block"
                loading="lazy"
            />
            <div className="p-[30px]">
                <h5 className="text-lg md:text-xl font-semibold text-[#0040b3] mb-4">
                    {data?.title}
                </h5>
                <p className="text-[#212529] text-sm md:text-base">
                    {data?.description}
                </p>
            </div>
        </div>
    )
}

export default Locations