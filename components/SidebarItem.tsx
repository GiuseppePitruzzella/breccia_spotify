import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    href: string;
    active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    href,
    active
}) => {
    return (
        <Link 
            href={href}
            className={twMerge(
                `flex 
                flex-row 
                h-auto 
                w-full 
                items-center 
                gap-x-4 
                text-md 
                font-medium 
                cursor-pointer
                hover:text-white 
                transition
                text-neutral-400
                py-1
                `,
                active && "text-white"
            )}
        >
            <Icon size={18} />
            <span className="truncate w-full">
                {label}
            </span>
        </Link>
    );
}

export default SidebarItem;