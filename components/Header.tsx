"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import { HiHome, HiSearch } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();

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
                    {/* Desktop */}
                    <button 
                        onClick={() => router.back() }
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft className="text-white" size={20}/> 
                    </button>
                    <button 
                        onClick={() => router.forward() }
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight className="text-white" size={20}/>
                    </button>
                </div>

                <div className="flex md:hidden gap-x-2 items-center">
                    {/* Mobile */}
                    <button className="rounded-full bg-black p-2 flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-white" size={20} />
                    </button>
                    <button className="rounded-full bg-black p-2 flex items-center justify-center hover:opacity-75 transition">
                        <HiSearch className="text-white" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button
                                className="
                                    bg-transparent
                                    text-neutral-300
                                    font-medium
                                ">
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => {}}
                                className="
                                    bg-white
                                    rounded-full
                                    px-6
                                    py-2
                                    text-black
                                    font-medium
                                ">
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header;