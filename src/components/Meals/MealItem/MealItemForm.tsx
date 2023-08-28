import React, { useRef, useState} from "react";

import classes from './MealItemForm.module.scss';
import Input from "../../UI/Input";

interface MealItemFormProps {
    inputId: string;
    onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<MealItemFormProps> = ({inputId, onAddToCart}) => {
    const amountInputRef = useRef<HTMLInputElement | null>(null);
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event: any) => {
        event.preventDefault();

        const eneteredAmount = amountInputRef.current?.value;

        if (eneteredAmount) {
            const enteredAmountNumber = +eneteredAmount;

            if (eneteredAmount?.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
                setAmountIsValid(false);
                return;
            }

            onAddToCart(enteredAmountNumber);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{ 
                    id: 'amount' + inputId, 
                    type: 'number', 
                    min: '1', 
                    max: '5', 
                    step: '1', 
                    defaultValue: '1'
                }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
};

export default MealItemForm;