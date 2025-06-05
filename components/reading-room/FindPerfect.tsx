import Image from 'next/image'
import React from 'react'
import readingRoomImage from "../../public/assets/Resources/slider-image.png"

const FindPerfect = () => {
    return (
        <div className="flex items-center justify-center min-h-screen readingroom">
            <div className="z-10 flex flex-col items-center justify-between w-full max-w-6xl lg:flex-row">
                {/* Text Section */}
                <div className="mb-10 space-y-4 text-center lg:text-left lg:mb-0">
                    <h1 className="lg:absolute top-1/4 text-[70px] leading-tight text-[#094678] li font-extralight">
                        Find Perfect
                        <h1 className="text-[70px] font-semibold bg-gradient-to-r from-[#cb0061] to-[#001fd1] bg-clip-text text-transparent">
                            Reading Room
                        </h1>
                        Near By You
                    </h1>
                </div>

                {/* Image Section */}
                <div className="lg:absolute bottom-8 w-1/2  right-[6%]">
                    <Image src={readingRoomImage} alt="Reading Room" className="w-auto h-auto" />
                </div>
            </div>
        </div>
    )
}

export default FindPerfect