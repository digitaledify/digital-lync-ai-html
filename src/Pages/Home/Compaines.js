import React from 'react'
import P1 from "../../assets/Compaines/p1.webp";
import P2 from "../../assets/Compaines/p2.webp";
import P3 from "../../assets/Compaines/p3.webp";
import P4 from "../../assets/Compaines/p4.webp";
import P5 from "../../assets/Compaines/p5.webp";
import P6 from "../../assets/Compaines/p6.webp";
import P7 from "../../assets/Compaines/p7.webp";
import P8 from "../../assets/Compaines/p8.webp";
import P9 from "../../assets/Compaines/p9.webp";
import P10 from "../../assets/Compaines/p10.webp";
import P12 from "../../assets/Compaines/p12.webp";

const Compaines = () => {
    const images = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P12];

    return (
        <div className='px-5 mt-8 md:mt-12 lg:mt-16 mb-16 md:mb-16 justify-items-center font-poppins'>
            <div className="grid grid-cols-5 gap-1 md:gap-12 md:mx-5 justify-items-center items-center">
                {images.slice(0, 5).map((image, index) => (
                    <img
                        key={`row1-${index}`}
                        src={image}
                        loading="lazy"
                        alt={`Image ${index + 1}` || "Compaines"}
                        className={`object-contain filter grayscale-[100%] hover:filter-none ${index === 0
                            ? "h-9 md:h-20 w-[120px] md:w-[160px]"
                            : index === 1
                                ? "h-9 md:h-16 w-[120px] md:w-[180px]"
                                : index === 2
                                    ? "h-9 md:h-12 w-[90px] md:w-[130px]"
                                    : index === 3
                                        ? "h-9 md:h-14 w-[90px] md:w-[160px]"
                                        : index === 4
                                            ? " h-9 md:h-14 w-[50px] md:w-[100px]"
                                            : " h-9 md:h-18 w-[150px]"
                            }`}
                    />
                ))}
            </div>

            <div className="grid grid-cols-6 gap-1 md:gap-7 justify-items-center items-center">
                {images.slice(5, 11).map((image, index) => (
                    <img
                        key={`row2-${index}`}
                        loading="lazy"
                        src={image}
                        alt={`Image ${index + 6}` || "Compaines"}
                        className={`object-contain filter grayscale-[100%] hover:filter-none ${index === 0
                            ? "h-10 md:h-18 w-[150px]"
                            : index === 1
                                ? "h-10 md:h-16 w-[140px]"
                                : index === 2
                                    ? "h-10 md:h-14 w-[130px]"
                                    : index === 3
                                        ? "h-10 md:h-20 w-[90px]"
                                        : index === 4
                                            ? "h-10 md:h-12 w-[100px]"
                                            : index === 5
                                                ? "h-10 md:h-12 w-[110px]"
                                                : "h-10 md:h-14 w-[130px]"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Compaines