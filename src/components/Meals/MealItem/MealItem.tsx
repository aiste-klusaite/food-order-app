import React from "react";

import classes from './MealItem.module.scss';
import MealItemForm from "./MealItemForm";

interface MealItemProps {
    name: string;
    description: string;
    price: number;
    mealId: string;
}

const MealItem: React.FC<MealItemProps> = ({ name, description, price, mealId}) => {
    const modifiedPrice = `$${price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{modifiedPrice}</div>
            </div>
            <div><MealItemForm inputId={mealId} /></div>
        </li>
    )
};

export default MealItem;