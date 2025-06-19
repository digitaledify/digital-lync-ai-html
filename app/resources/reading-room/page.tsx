import React from 'react'
import FindPerfect from '@/components/reading-room/FindPerfect'
import ReadingRoomSection from '@/components/reading-room/ReadingRoomSection'
import Home from '@/components/reading-room/Home'
import AmenitiesSection from '@/components/reading-room/AmenitiesSection'
import WhyDigitalEdify from '@/components/Home/WhyDigitalEdify'
import OnlineTaining from '@/components/Home/OnlineTaining'
import OurLocations from '@/components/Home/OurLocations'

const Page = () => {
    return (
        <>
            <FindPerfect />
            <ReadingRoomSection />
            <Home />
            <AmenitiesSection />
            <div className='-mt-20'>
                <WhyDigitalEdify />
            </div>
            <OnlineTaining />
            <OurLocations />
        </>
    )
}

export default Page