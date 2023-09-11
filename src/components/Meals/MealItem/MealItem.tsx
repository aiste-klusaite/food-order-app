import React, { useContext } from "react";

import classes from './MealItem.module.scss';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

interface MealItemProps {
    name: string;
    description?: string;
    price: number;
    mealId: string;
}

const MealItem: React.FC<MealItemProps> = ({ name, description, price, mealId}) => {
    const cartCtx = useContext(CartContext);
    const { addItem } = cartCtx;
    const modifiedPrice = `$${price.toFixed(2)}`

    const addToCartHandler = (amount: number) => {
        addItem({
            name: name,
            amount: amount,
            price: price,
            mealId: mealId,
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{modifiedPrice}</div>
            </div>
            <div><MealItemForm inputId={mealId} onAddToCart={addToCartHandler}/></div>
        </li>
    )
};

export default MealItem;