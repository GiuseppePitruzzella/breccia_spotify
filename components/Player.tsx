"use client";

import { usePathname } from "next/navigation";
import { use, useMemo } from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface PlayerProps {
    children: React.ReactNode;
}
const Player: React.FC<PlayerProps> = ({ 
    children 
}) => {
    const pathName = usePathname();

    // const routes = useMemo(() => [
    //     {
    //         icon: HiHome,
    //         label: "Home",
    //         href: "/",
    //         active: pathName !== "/search",
    //     },
    //     {
    //         icon: HiSearch,
    //         label: "Search",
    //         href: "/search",
    //         active: pathName === "/search",
    //     },
    // ], [pathName]);


    return (
        <div>
            <div className="hidden md:flex flex-col flex-1 bg-black h-full w-200 p-2">
                <Box>
                    {/* <div className="flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItem 
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div> */}
                </Box>
                <Box className="overflow-y-auto h-full">
                    Occhio! Il componente Player dovrebbe essere (nel tutorial) il componente Header.
                    Sarà poi necessario rinominarlo in Player.
                    Il contenuto principale di Header (che sarebbe la homepage) andrà nella varie sezioni di sidebar.
                </Box>
            </div>
        </div>
    );
}

export default Player;