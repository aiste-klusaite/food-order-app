import React, { useContext } from "react";

import classes from './Cart.module.scss';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { ItemMeal } from "../../Model/ItemMeal";

interface CartProps {
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({onClose}) => {
    const cartCtx = useContext(CartContext);
    const { items, totalAmount, removeItem, addItem } = cartCtx;

    const totalCartAmount = `$${totalAmount.toFixed(2)}`;
    const hasItems = items.length > 0;

    const cartItemRemoveHandler = (id: string) => {
        removeItem(id);
    };

    const cartItemAddHandler = (item: ItemMeal) => {
        addItem(item);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
        {items.map((item) => (
            <CartItem 
                key={item.mealId} 
                item={item}
                onRemove={() => cartItemRemoveHandler(item.mealId)}
                onAdd={cartItemAddHandler}
            />))}
    </ul>);

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalCartAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;