import React from 'react';
import UPIQR from "../../assets/upi-qr-code.png"

const OnlinePay = () => {
    return (
        <div className="online-pay bg-[#F5F5F5] py-20 text-center font-poppins">
            <p className="mb-5 text-2xl md:text-4xl font-bold text-[#343433]">Make Online Payment</p>
            <p className="text-xl md:text-3xl font-medium mb-2">Pay with UPI</p>
            <div className="container mx-auto">
                <div className="cardbox bg-white shadow-md p-8 mb-5 rounded-2xl">
                    <img
                        src={UPIQR}
                        alt="UPI QR Code"
                        className="mx-auto"
                    />
                </div>
                <p className=" text-base md:text-lg font-medium">
                    <b>UPI: </b>
                    <span>digitaledify7330957355@icici</span>
                </p>
            </div>

        </div>
    );
};

export default OnlinePay;