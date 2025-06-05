"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image"; 
import { IEventDetail } from "@/utils/events";

export default function TeamSlider({ event }: { event: IEventDetail | undefined }) {
    return (
        <div className="container w-full p-10 mx-auto border-b">
            {/* Top Bar */}
            <div className="relative flex items-center">
                {/* Left purple shape */}
                <div className="bg-[#7E3AF2] w-[400px] h-16 !rounded-bl-none rounded-t-2xl"></div>

                
                    <h3 className="text-[#7E3AF2] font-bold text-lg pl-[30px]">Meet Our Team</h3>
                   
                
            </div>

            {/* Slider */}
            <div className="bg-[#7E3AF2] rounded-2xl !rounded-tl-none p-8">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    loop
                >
                    {event?.slider?.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-8 md:flex-row">

                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    width={280}
                                    height={400}
                                    className="rounded-l-2xl rounded-tl-[120px]"
                                />
                                <div className="text-white">
                                    <h2 className="text-2xl font-bold">{member.name}</h2>
                                    <h3 className="mt-2 text-lg font-semibold">{member.role}</h3>
                                    <p className="mt-4 text-[#ffffff75]">{member.description}</p>
                                    <p className="mt-2 text-[#ffffff75]">{member.description1}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
