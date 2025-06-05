import React from 'react'
import OneLearnCircle from './OneLearnCircle'

const Build = () => {
    return (
        <div className="relative mt-5 text-center">
            <div className="absolute left-0 top-0 lg:-left-1 lg:-top-10 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <div className="absolute hidden lg:block top-28 lg:left-40 sm:top-[420px] w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />

            <OneLearnCircle title="Build" number="2" />
            <p className="mt-2 text-xs md:text-base font-poppins">
                Work on our Real-time{" "}
                <span className="text-blue-800">Projects , Task Based</span>
            </p>
        </div>
    )
}

export default Build