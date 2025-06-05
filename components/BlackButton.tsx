import React, { ReactNode } from 'react'

interface BlackButtonProps {
    name?: string;
    icon?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const BlackButton = ({ name, icon, onClick }: BlackButtonProps) => {
    return (
        <button onClick={onClick} className="flex gap-2 lg:gap-3 text-xs lg:text-sm min-w-36 md:min-w-44 items-center px-2.5 lg:px-4 py-1.5 lg:py-2 bg-black text-white font-semibold rounded-lg hover:bg-sky-500 justify-center">
            {icon}
            {name}
        </button>

    )
}

export default BlackButton
