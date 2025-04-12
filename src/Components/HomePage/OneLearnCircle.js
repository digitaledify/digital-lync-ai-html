import React from 'react'

const OneLearnCircle = ({ title, number, mainTitle, discription }) => {
    return (
        <div class="font-poppins mt-7">
            <div className="text-center font-poppins">
                {mainTitle}
                <div className="w-[1px] h-14 md:h-[120px] self-center pr-[1px] mx-auto bg-gradient-to-b from-white to-[#9a1fb8]"></div>
                <div className='flex justify-center'>
                    <div className="w-10 h-10 rounded-full text-white font-bold mb-[-10px] bg-gradient-to-r from-[#ca0063] to-[#042bd0]">
                        <p className='text-center mt-2'>
                            {number}
                        </p>
                    </div>
                </div>
                <p className="font-bold text-2xl md:text-3xl text-center mt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#913461] to-[#02166d]">
                    {title}
                </p>
                <p className="text-xs md:text-base mt-2 w-2/5 mx-auto">
                    {discription}
                </p>
            </div>
        </div>
    )
}

export default OneLearnCircle
