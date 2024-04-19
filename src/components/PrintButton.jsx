import React from "react";
import { BsPrinterFill } from "react-icons/bs";

export default function PrintButton() {
    const handleClick = () => {
        window.open("https://forms.gle/JudfhijRjN289yzR8", "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="flex flex-row gap-4 px-4 items-center justify-center bg-[#7289da] text-white rounded-md p-2"
        >
            <h2 className="hidden md:block">3D Print!</h2>
            <BsPrinterFill />
        </button>
    );
}
