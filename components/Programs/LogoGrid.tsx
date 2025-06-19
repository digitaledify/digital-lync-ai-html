import Image, { StaticImageData } from "next/image";
import React from "react";

interface Logo {
    id: number;
    src: string | StaticImageData;
    description?: string;
}

interface LogoGridProps {
    logos: Logo[] | undefined;
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
    return (
        <div className="flex flex-wrap items-center justify-center pb-10 space-x-5 space-y-7">
            {logos?.map((logo, index: number) => (
                <div
                    key={index}
                    className="flex items-center justify-center"
                >
                    <Image
                        src={logo?.src}
                        alt={"LogoGrid"}
                        className="h-10 w-20 md:h-16 md:w-[140px] object-contain filter grayscale-[100%] hover:filter-none mx-auto"
                        priority
                    />
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;
