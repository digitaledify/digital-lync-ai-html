import React from 'react';
import Image from 'next/image';
import { IEventDetail } from '@/utils/events';

const HeroSection = ({ event, setIsOpen }: { event: IEventDetail | undefined; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  return (
    <section className="container px-6 py-8 border-b  md:mx-auto">
      <div className="flex flex-col items-center justify-between mx-auto max-w-7xl md:flex-row md:gap-3">
        {/* Left Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="pb-6 text-4xl font-semibold md:text-6xl leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3]">
            {event?.title}
          </h1>
          <p className="mb-1 text-base font-bold text-gray-600">
            {event?.titleHeader}
          </p>
          <p className="mb-1 text-base text-gray-600">
            {event?.subtitle}
          </p>
          <p className="mb-6 text-2xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3]">
            {event?.topics}
          </p>
          <p className="flex flex-wrap gap-2 font-bold text-gray-800">
            {event?.date}
          </p>
        </div>

        {/* Right Image + Button */}
        <div className="relative mt-10 md:mt-0">
          <div className="rounded-[30px] overflow-hidden ">
            <Image
              src={`${event?.heroImage}`} // Replace with your actual image path
              alt="Coding"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="px-2 mt-4 text-center">
            <button onClick={() => setIsOpen(true)} className="px-6 py-3 w-full text-white transition duration-300 bg-[#001fd1] rounded-lg hover:bg-black">
              Register for FREE Online Master Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
