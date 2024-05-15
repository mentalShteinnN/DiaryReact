import React from 'react'
import "./Button.scss";

interface ButtonProps extends React.PropsWithChildren {
    type?: "button" | "submit";
    onClick?: () => void;
    buttonType?: "pink";
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    type,
    onClick,
    buttonType,
    className,
    children,
}) => {
  return (
    <button type={type} onClick={onClick} className={`button${buttonType ? ` ${buttonType}` : ""}${className ? ` ${className}` : ""}`}>
        {children}
    </button>
  )
}

export default Button