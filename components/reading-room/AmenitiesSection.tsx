'use client';

export default function AmenitiesSection() {
  const amenities = [
    'IT Support',
    'High Speed Internet',
    '24X7, 365 Days',
    'Lockable Offices',
    'Conceirge Services',
    'Power Backup',
    'Phone Booths',
    'Dedicated Parking',
  ];

  return (
    <div className="w-full px-4 py-20 bg-[#f5f6fc]">
      <h2 className="mb-10 text-4xl font-semibold text-center text-gray-800">Amenities</h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="text-center text-black bg-white rounded-lg shadow-sm p-14"
          >
            <p className="text-3xl font-light leading-snug">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
