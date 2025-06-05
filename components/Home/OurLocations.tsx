import React from 'react'
import place1 from "../../public/assets/kakinada.jpg";
import place2 from "../../public/assets/bangalore.jpg";
import place3 from "../../public/assets/hyd.jpg";
import Locations from '../Locations';
const OurLocations = () => {

    const locations = [
        {
            id: 1,
            image: place3,
            title: "Hyderabad, Telangana",
            description:
                "2nd Floor, Hitech City Rd, Above Domino's, opp. Cyber Towers, Jai Hind Enclave, Hyderabad, Telangana.",
        },
        {
            id: 2,
            image: place2,
            title: "Bengaluru, Karnataka",
            description:
                "3rd Floor, Site No 1&2 Saroj Square, Whitefield Main Road, Munnekollal Village Post, Marathahalli, Bengaluru, Karnataka.",
        },
        {
            id: 3,
            image: place1,
            title: "Kakinada, Andhra",
            description:
                "Madhav Nager Main Road, Opp SBI Bank, Opp SP Office, Kakinada, Andhra Pradesh.",
        },
    ];

    return (
        <div className="mt-5 bg-[#fafafa] py-20 w-full">
            <h3 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl font-poppins">
                Our Locations
            </h3>
            <p className="mb-12 text-center text-gray-600 font-poppins">
                Come and chat with us about your goals over a cup of coffee.
            </p>


            <div className="flex flex-wrap justify-center text-center gap-7 font-poppins">
                {locations.map((location) => (
                    <Locations data={location} key={location?.id} />
                ))}
            </div >
        </div>
    )
}

export default OurLocations
