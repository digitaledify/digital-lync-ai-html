import React, { ReactNode } from 'react';

interface RoundedButtonProps {
    name?: string;
    icon?: ReactNode; // Specify that `icon` is a React node (i.e., a React element like an icon)
    theme?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // onClick should be a function that takes a MouseEvent
}

const RoundedButoon = ({ name, icon, theme, onClick }: RoundedButtonProps) => {
    const isGrayTheme = theme === "gray";

    return (
        <button
            className={`flex gap-3 rounded-full text-xs md:text-sm items-center px-4 py-2 font-semibold 
        ${isGrayTheme ? 'border-[#888888] hover:bg-[#888888] hover:text-white' : 'border-orange-600 hover:bg-pink-700 hover:text-white'} border`}
            style={{
                boxShadow: isGrayTheme
                    ? "#cacaca 0px 14px 30px" // gray shadow
                    : "rgb(255 161 161 / 50%) 0px 14px 30px", // Default shadow
            }}
            onClick={onClick}
        >
            {name}
            {icon}
        </button>
    );
};

export default RoundedButoon;
