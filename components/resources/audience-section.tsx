import React, { useState } from "react"; 
import { IEventDetail } from '@/utils/events';
import StartNowModal from "@/components/StartNowModal";
const AudienceSection = ({ event }: { event: IEventDetail | undefined }) => {
  const [isOpen, setIsOpen] = useState(false);

  const audienceGroups = event?.audience?.groups || [];
  const midpoint = Math.ceil(audienceGroups.length / 2);
  const leftColumn = audienceGroups.slice(0, midpoint);
  const rightColumn = audienceGroups.slice(midpoint);

  return (
    <section className="bg-[#f7faff]">
    <div className="pt-16 pb-12 container mx-auto border-b">
      <div className="flex flex-col md:flex-row items-start gap-10">

        {/* Left Half: Text Content */}
        <div className="w-full">
          <h2 className="mb-8 text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3] md:text-4xl">
            Who Should Attend
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[leftColumn, rightColumn].map((column, colIdx) => (
              <div key={colIdx} className="flex gap-4">
                {/* Dots */}
                <div className="mt-3.5">
                  {column.map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-[#704fe6] rounded-full w-3.5 h-3.5"></div>
                      {index !== column.length - 1 && (
                        <div className="border-[#704fe6] border-r h-[42px] w-[2px]"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className="mt-1.5 space-y-8">
                  {column.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center w-full mt-10">
            <button
              className="px-8 py-3 font-semibold text-white transition bg-[#001fd1] rounded-lg hover:bg-black"
              onClick={() => setIsOpen(true)}
            >
              Register for FREE Online Master Class
            </button>
          </div>
        </div>
      </div>
    </div>
    <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />
  </section>
  );
};

export default AudienceSection;
