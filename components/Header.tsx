"use client";

import { useRouter } from "next/router";
import { RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    // const router = useRouter();

    const handleLogout = () => {
        // TODO: Add logout functionality
    }

    return (
        <div className={twMerge(
            `bg-gradient-to-b h-fit from-emerald-800 p-6`,
            className
        )}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
            </div>
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"><RxCaretRight className="text-white" size={20}/></button>
            </div>
            {children}
        </div>
    );
}

export default Header;