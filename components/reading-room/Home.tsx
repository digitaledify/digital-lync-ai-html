'use client';

import Image from 'next/image';
import space from '../../public/assets/Resources/space.jpg';
import space2 from '../../public/assets/Resources/space2.jpg';
import space3 from '../../public/assets/Resources/space3.jpg';
import space4 from '../../public/assets/Resources/space4.jpg';

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-white md:p-8">
      <div className="grid w-full grid-cols-1 gap-4 max-w-7xl md:grid-cols-3 md:gap-6 ">
        {/* Left tall image */}
        <div className="row-span-2" >
          <Image
            src={space}
            alt="Cozy lounge"
            className="object-cover w-full h-full rounded-lg"
            placeholder="blur"
          />
        </div>

        {/* Top middle image */}
        <div>
          <Image
            src={space2}
            alt="Modern chairs"
            className="object-cover max-h-[300px] w-full h-full rounded-lg"
            placeholder="blur"
          />
        </div>

        {/* Top right image */}
        <div>
          <Image
            src={space3}
            alt="Casual chat"
            className="object-cover w-full max-h-[300px] h-full rounded-lg"
            placeholder="blur"
          />
        </div>

        {/* Center text box */}
        <div className="flex items-center justify-center col-span-1 p-6 text-center text-white rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500">
          <p className="p-10 text-3xl font-semibold leading-relaxed">
            “ Work feels more like<span className="text-pink-300"> home</span> and <span className="text-pink-300">fun</span> after we moved here. ”
          </p>
        </div>

        {/* Bottom right image */}
        <div /* className="col-span-2" */>
          <Image
            src={space4}
            alt="Team collaboration"
            className="object-cover w-full max-h-[300px] h-full rounded-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
