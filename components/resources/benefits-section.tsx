import React from 'react';
import { IEventDetail } from '@/utils/events';

const BenefitsSection = ({ event, setIsOpen }: { event: IEventDetail | undefined; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {

  return (
    <section className="bg-[#f7faff] pt-16 pb-12 px-6 container md:mx-auto border-b">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="pb-12 text-center">
          <h2 className="text-3xl p-2 font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3]  md:text-4xl">
            What you will gain from this Masterclass
          </h2>
        </div>

        {/* Gain List */}
        <div className="grid gap-8 md:grid-cols-2">
          {event?.benefits?.items?.map((gain, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Check Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-10 h-10 bg-white border rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-800">{gain.title} : <span className="font-normal text-gray-600">{gain.description}</span></h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button onClick={() => setIsOpen(true)} className="px-8 py-3 font-semibold text-white transition bg-[#001fd1] rounded-lg hover:bg-black">
            Register for FREE Online Master Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
