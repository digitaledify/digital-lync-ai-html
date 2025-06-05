import { IEventDetail } from '@/utils/events';
import React from 'react';

const JobRolesSection = ({ event, setIsOpen }: { event: IEventDetail | undefined; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  console.log("🚀 ~ JobRolesSection ~ event:", event)
  const Data = event?.jobRoles?.roles?.slice(0, 2)
  const Data1 = event?.jobRoles?.roles?.slice(2)

  return (
    <section className="bg-[#f7faff] pt-16 pb-12 px-6 border-b container md:mx-auto">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3] text-start md:text-4xl">Job Roles</h2>
        {/* Top Text */}
        <div className='flex flex-wrap justify-between'>
          <div className='mt-10 md:w-1/2 text-start'>
            <h3 className="mb-6 text-xl font-bold md:text-4xl">
              {event?.jobRoles?.subtitle}
            </h3>
            <p className="max-w-2xl mx-auto mb-12 text-xl text-gray-600 md:pr-28">
              {event?.jobRoles?.description}
            </p>

          </div>

          {/* Grid */}
          <div className="grid md:w-1/2 grid-cols-1 gap-8 md:pr-0.5 md:pl-4 md:grid-cols-2">
            {Data?.map((role, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 text-center bg-white rounded-lg shadow-xl"
              >
                <div className="bg-[#efe7f5] p-4 rounded-full">
                  {role.icon}
                </div>
                <h4 className="text-lg font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3] ">{role.title}</h4>
                <p className="text-sm text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4 md:mt-8 md:grid-cols-4">
          {Data1?.map((role, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 text-center bg-white rounded-lg shadow-xl"
            >
              <div className="bg-[#f1f5f9] p-4 rounded-full">
                {role.icon}
              </div>
              <h4 className="text-lg font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3] ">{role.title}</h4>
              <p className="text-sm text-gray-600">{role.description}</p>
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

export default JobRolesSection;
