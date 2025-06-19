import { ImageDataType } from "@/utils/CourseData";
import React from "react";
import Image from "next/image";

const LogoGrid = ({ logos }: { logos: ImageDataType[] | undefined }) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5 pb-10">
            {logos?.map((logo, index) => (
                <div
                    key={`${logo.id || logo.src}-${index}`} // Composite fallback key
                    className="flex items-center justify-center w-24 h-14 px-5 py-3 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={logo.src}
                            alt="LogoGrid"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;
