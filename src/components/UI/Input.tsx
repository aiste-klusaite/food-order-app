import React, { forwardRef } from "react";

import classes from './Input.module.scss';

interface InputProps {
    label: string;
    input: {
        id: string;
        type: 'text'| 'number'
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    }
}

export type RefType = HTMLInputElement;

const Input = forwardRef<RefType, InputProps>(({label, input}, ref) => {
    return <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input {...input} ref={ref}/>
    </div>
});

export default Input;