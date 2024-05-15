import React from 'react'
import "./Input.scss";

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    inputType?: "textarea";
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    inputType,
    className,
    type,
    placeholder,
}) => {

    if (inputType === "textarea") {
        return (
            <textarea placeholder={placeholder} onChange={onChange} value={value} className={`textarea${className ? ` ${className}` : ""}`}></textarea>
        );
    }

    return (
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange} 
            value={value}
            className={`input${className ? ` ${className}` : ""}`}
        />
    )
}

export default Input