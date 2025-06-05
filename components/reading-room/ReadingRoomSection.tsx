"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import readingRoom from '../../public/assets/Resources/banner1.jpg' // Replace with your image
import dotsBg from '../../public/assets/Resources/dot.png'
import StartNowModal from '../StartNowModal'

const ReadingRoomSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative px-4 py-16 mt-20 mb-40 bg-white">
      <div className="flex flex-col-reverse items-center justify-between mx-auto max-w-7xl lg:flex-row lg:gap-10">

        {/* Image with dots background */}
        <div className="relative w-full max-w-xl mt-8 md:mt-0">
          {/* Dotted Background */}
          <Image
            src={dotsBg}
            alt="dots"
            className="absolute top-[-30px] left-[-30px] z-0 w-48 h-48 object-contain"
          />

          {/* Main Image */}
          <Image
            src={readingRoom}
            alt="Reading Room"
            className="z-10 rounded-lg shadow-lg md:relative top-14 left-14"
          />

          {/* Overlay Card */}
          <div className="md:absolute text-center top-[92%] left-[100%] md:translate-x-[-50%] bg-gradient-to-r from-[#8000bf] to-[#a400d1] text-white px-10 py-7 rounded-lg w-72 shadow-xl z-20">
            <h2 className="text-4xl font-light">1500</h2>
            <p className="text-base font-bold">Total working space</p>
            <p className="mt-1 text-base">
              Vel facilisis volutpat est velit. Dui nunc mattis enim ut tellus elementum sagittis vitae et.
            </p>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full max-w-[490px] text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
            India #1 Reading Rooms | Corporate Study Spaces
          </h1>
          <p className="mt-4 text-gray-600">
            Digital Edify’s Reading Rooms, your ultimate destination for a quiet, inspiring, and technologically advanced study environment. Strategically located in Hyderabad, Bangalore, and Kakinada
          </p>
          <button onClick={() => setIsOpen(true)} className="mt-6 px-6 py-2 bg-[#094678] text-white rounded font-semibold hover:bg-[#072c4e] transition">
            Read More
          </button>
        </div>
      </div>
      {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}

export default ReadingRoomSection
