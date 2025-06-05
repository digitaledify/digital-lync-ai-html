import { IEventDetail } from '@/utils/events';
import React from 'react';

const HighlightsSection = ({ event, setIsOpen }: { event: IEventDetail | undefined; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  return (
    <section className="bg-[#f7faff] pt-16 pb-12 px-6 container md:mx-auto border-b">
      <div className="mx-auto text-center max-w-7xl">
        {/* Title */}
        <h2 className="pb-12 text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3] text-start md:text-4xl">
          Why This Demo Is Unmissable
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          {event?.highlights?.items?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 px-6 border-l border-black "
            >
              <div className="text-3xl font-bold text-[#555555]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-3xl font-semibold text-[#343433]">
                {item.title}
              </h3>
              <p className="text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button onClick={() => setIsOpen(true)} className="px-8 py-3 font-semibold text-white transition bg-[#001fd1] rounded-lg hover:bg-black">
            Register for FREE Online Master Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
