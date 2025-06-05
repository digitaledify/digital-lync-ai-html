import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiStopwatch } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import WhiteButton from "./WhiteButton";
import StartNowModal from "./StartNowModal";

// Define the type for the `time` object
interface TimeDetails {
    date: string;
    day: string;
    startTime: string;
    duration: string;
}

// Define the type for the `data` prop
interface WeekDayBatchData {
    title: string;
    schedule: string;
    time: TimeDetails;
}
const WeekDayBatches = ({ data }: { data: WeekDayBatchData }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div
                className="px-8 pb-8 bg-white rounded-lg py-7"
                style={{ boxShadow: "#ddd 0 0 20px " }}
            >
                <h5 className="text-lg font-semibold">{data.title}</h5>
                <h6 className="mb-2">{data.schedule}</h6>
                <hr />
                <div className="flex gap-2.5 items-center pt-4">
                    <div className="bg-white border p-1.5 rounded-md">
                        <AiOutlineCalendar className="text-gray-700" size={17} />
                    </div>
                    <p className="text-sm leading-[16px] text-gray-700">
                        <strong>{data.time.date}</strong>
                        <br />
                        {data.time.day}
                    </p>
                </div>
                <div className="flex gap-2.5 items-center pt-4 pb-6 mb-3">
                    <div className="bg-white border p-1.5 rounded-md">
                        <BiStopwatch className="text-gray-700" size={19} />
                    </div>
                    <p className="text-sm leading-[16px] text-gray-700">
                        {data.time.startTime}
                        <br />
                        {data.time.duration}
                    </p>
                </div>
                <WhiteButton
                    name=" Get Free Course Demo "
                    icon={<VscGraph size={17} />}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    );
};

export default WeekDayBatches;
