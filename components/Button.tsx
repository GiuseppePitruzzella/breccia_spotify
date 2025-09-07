import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button 
            type={type}
            className={twMerge(`
                w-full
                rounded-full
                bg-green-500
                px-3
                py-3
                disabled:opacity-50
                disabled:cursor-not-allowed
                hover:opacity-75
                border
                border-transparent
                text-black
                font-bold
                transition
                `, className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
}))

export default Button;