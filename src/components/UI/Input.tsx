import React from "react";

import classes from './Input.module.scss';

interface InputProps {
    label: string;
    input: {
        id: string;
        type: 'text'| 'number'
        min: string;
        max: string;
        step: string;
        defaultValue: string
    }
}

const Input: React.FC<InputProps> = ({label, input}) => {
    return <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input {...input}/>
    </div>
};

export default Input;