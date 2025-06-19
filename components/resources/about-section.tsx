import React from 'react';
import Image from 'next/image';
import { IEventDetail } from '@/utils/events';

const AboutSection = ({ event, setIsOpen }: { event: IEventDetail | undefined; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  return (
    <section className="bg-[#f7faff] py-16 px-6 container md:mx-auto border-b">
      <div className="mx-auto max-w-7xl">
        {/* Heading and Subheading */}

        {/* Main Content */}
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="mb-12 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold leading-tight w-fit text-transparent  bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3] md:text-4xl">
                About this Master Class
              </h2>
              <p className="max-w-3xl text-lg text-gray-700">
                {event?.about?.description}
              </p>
            </div>
            <div className="overflow-hidden shadow-lg rounded-3xl">
              <Image
                src={`${event?.about.image}`} // replace with your image name
                alt="Master Class"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            {/* Button */}
            <div className="mt-12 text-center">
              <button onClick={() => setIsOpen(true)} className="w-full px-8 py-3 font-semibold text-white transition bg-[#001fd1] rounded-lg hover:bg-black">
                Register for FREE Online Master Class
              </button>
            </div>
          </div>

          {/* Right Topics List */}
          <div className="w-full space-y-2 md:w-1/2">
            {event?.about?.features?.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 transition bg-white border-b-4 border-blue-200 shadow-md rounded-2xl hover:shadow-inner"
              >
                <Image
                  src="/assets/Event/licon.png"
                  alt="Master Class"
                  width={35}
                  height={35}
                  className="object-cover !h-9"
                />
                <div>

                  <h3 className="mb-1 w-fit text-lg font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3]">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
