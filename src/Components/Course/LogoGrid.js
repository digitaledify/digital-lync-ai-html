import React from "react";

const LogoGrid = ({ logos }) => {
    return (
        <div className="flex justify-center items-center flex-wrap space-x-5 space-y-7 pb-10">
            {logos?.map((logo) => (
                <div
                    key={logo.id}
                    className="flex justify-center items-center"
                >
                    <img
                        src={logo?.src}
                        alt={logo?.alt || "LogoGrid"}
                        className="h-10 w-20 md:h-16 md:w-[140px] object-contain filter grayscale-[100%] hover:filter-none mx-auto"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;
