import React from "react";

import classes from './MealItemForm.module.scss';
import Input from "../../UI/Input";

const MealItemForm: React.FC<{inputId: string}> = ({inputId}) => {
    return (
        <form className={classes.form}>
            <Input 
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
        </form>
    )
};

export default MealItemForm;