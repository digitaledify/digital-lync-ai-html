import React from 'react'
import Locations from '../../Components/HomePage/Locations'
import place1 from "../../assets/kakinada.jpg";
import place2 from "../../assets/bangalore.jpg";
import place3 from "../../assets/hyd.jpg";



const OurLocations = (data) => {

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
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 text-center font-poppins">
                Our Locations
            </h3>
            <p className="text-gray-600 mb-12 text-center font-poppins">
                Come and chat with us about your goals over a cup of coffee.
            </p>


            <div className="flex flex-wrap justify-center gap-7 text-center font-poppins">
                {locations.map((location) => (
                    <Locations data={location} />
                ))}
            </div >
        </div>
    )
}

export default OurLocations
