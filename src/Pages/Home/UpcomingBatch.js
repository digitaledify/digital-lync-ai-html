import React, { useState, useCallback } from "react";
import { VscGraph } from "react-icons/vsc";
import WhiteButton from "../../Components/WhiteButton";
import WeekDayBatches from "../../Components/HomePage/WeekDayBatches";
import StartNowModal from "../../Components/HomePage/StartNowModal";

// Function to add ordinal suffixes (st, nd, rd, th)
const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return `${day}th`; // Covers 4th to 20th
  const suffixes = ["st", "nd", "rd"];
  const modDay = day % 10;
  return `${day}${suffixes[modDay - 1] || "th"}`;
};

// Function to get the next occurrence of a given weekday dynamically
const getNextWeekday = (targetDay) => {
  const today = new Date();
  let daysToAdd = (targetDay - today.getDay() + 7) % 7;
  if (daysToAdd === 0) daysToAdd = 7; // Ensure future dates

  const nextDate = new Date();
  nextDate.setDate(today.getDate() + daysToAdd);

  return {
    date: `${getOrdinalSuffix(nextDate.getDate())} ${nextDate.toLocaleString("en-GB", {
      month: "short",
      year: "numeric",
    })}`,
    day: nextDate.toLocaleString("en-GB", { weekday: "long" }),
  };
};

const UpcomingBatch = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define batch schedules dynamically
  const batches = [
    {
      title: "Week Day Batches",
      schedule: "(Mon-Fri)",
      time: {
        ...getNextWeekday(1), // Monday
        startTime: "8 AM (IST)",
        duration: "1hr-1:30hr / Per Session",
      },
      demoLink: "#",
    },
    {
      title: "Week Day Batches",
      schedule: "(Mon-Fri)",
      time: {
        ...getNextWeekday(3), // Wednesday
        startTime: "10 AM (IST)",
        duration: "1hr-1:30hr / Per Session",
      },
      demoLink: "#",
    },
    {
      title: "Week Day Batches",
      schedule: "(Mon-Fri)",
      time: {
        ...getNextWeekday(5), // Friday
        startTime: "12 PM (IST)",
        duration: "1hr-1:30hr / Per Session",
      },
      demoLink: "#",
    },
  ];

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="container px-2 mx-auto mt-16">
        <p className="text-xl md:text-2xl font-bold text-center lg:text-start w-full font-poppins">
          Upcoming Batch Schedule
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12 font-poppins">
        <div className="flex flex-wrap justify-center gap-8">
          {batches.map((item, index) => (
            <WeekDayBatches key={index} data={item} />
          ))}
        </div>

        {/* Black Box - Custom Batch Request */}
        <div className="bg-black rounded-lg py-6 w-[280px] shadow-lg">
          <p className="w-4/5 mx-auto mt-5 mb-8 text-xl font-bold text-center text-white md:text-3xl">
            Can’t find a batch you were looking for?
          </p>
          <div className="flex justify-center">
            <WhiteButton
              name="Get Free Course Demo"
              icon={<VscGraph size={17} />}
              onClick={toggleModal}
            />
          </div>
        </div>

        {/* Modal */}
        {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};

export default UpcomingBatch;
