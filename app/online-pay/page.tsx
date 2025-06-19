'use client'; // Only if you're using Next.js 13+ App Router

import Image from 'next/image';

export default function PaymentPage() {
    return (
        <div className="content-center min-h-[75vh] p-6 ">
            <h1 className="mb-2 text-4xl font-bold text-center">Make Online Payment</h1>
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-600">Pay with UPI</h2>


            <div className="w-full max-w-5xl rounded-lg shadow-lg justify-self-center">
                <div className="flex flex-col items-center gap-4 px-20 py-10 bg-white">
                    {/* QR Code Image */}
                    <Image
                        src="/upi-qr-code.png" // replace this with your actual image in public folder
                        alt="QR Code"
                        width={1200}
                        height={900}
                        className="object-contain w-auto h-auto"
                    />
                </div>
            </div>

            <div className="mt-6 text-center">

                <p className="text-2xl flex justify-center items-center font-semibold text-[#1B1464]"> <p className="text-3xl font-semibold text-gray-700">UPI:</p> digitaledify7330957355@icici</p>
            </div>
        </div>
    );
}
