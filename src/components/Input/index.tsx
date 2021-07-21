import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: FC<InputProps> = ({ name, label }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name}></input>
        </div>
    );
};

export default Input;
