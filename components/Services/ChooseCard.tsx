import React from "react";

type BulletPoint = {
    title: string;
    description: string;
};

type ServiceData = {
    title: string;
    subTitle: string;
    bulletPoints: BulletPoint[];
};

type ChooseCardProps = {
    serviceData: ServiceData;
};

const ChooseCard: React.FC<ChooseCardProps> = ({ serviceData }) => {
    return (
        <div>
            <h3 className="text-center text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-16 mb-2.5">
                {serviceData?.title}
            </h3>
            <div className="flex justify-center mb-16 font-poppins">
                <p className="text-center md:w-2/3">{serviceData?.subTitle}</p>
            </div>

            <div className="container grid grid-cols-1 mb-5 md:grid-cols-2">
                {serviceData?.bulletPoints?.map((item, index: number) => {
                    return (
                        <ul key={index} className="container list-none about-list font-poppins">
                            <li className="px-2.5 pb-10">
                                <div className="!xb-item--inner relative p-8 bg-[#EDF3F5] border border-gray-200 rounded-xl overflow-hidden -z-[1]">
                                    <div className="absolute bg-white w-[45px] h-[105px] -z-[1] -top-2 left-0 -rotate-45 rounded-3xl" />
                                    <div className="absolute top-12 left-6 w-9 h-9 bg-[#FE6C3F] text-white font-bold flex items-center justify-center rounded-full shadow-md">
                                        {index + 1}
                                    </div>
                                    <div className="xb-item--holder pl-14">
                                        <h3 className="xb-item--title md:text-2xl font-medium mb-2.5">
                                            {item?.title}
                                        </h3>
                                        <div className="text-xs xb-item--description md:text-base">
                                            {item?.description}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseCard;
