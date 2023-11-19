import React, { Fragment, useContext, useState } from "react";

import classes from './Cart.module.scss';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { ItemMeal } from "../../Model/ItemMeal";
import Checkout from "./Checkout";
import { UserData } from "../../Model/UserData";

interface CartProps {
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({onClose}) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
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

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (userData: UserData) => {
        setIsSubmitting(true);
        await fetch('https://react-food-app-c6a8e-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

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
    
    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    )

    const cartModalContent = (<Fragment>
        {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalCartAmount}</span>
            </div>
            {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={onClose}/>}
            {!isCheckout && modalActions}
    </Fragment>)

    const isSubmittingModalContent = <p>Sensding order data...</p>

    const didSubmitModalContent = (<Fragment>
            <p>Succesfully sent the order!</p>
            <div className={classes.actions}>
            <button className={classes.button} onClick={onClose}>Close</button>
        </div>
        </Fragment>)

    return (
        <Modal onClose={onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
};

export default Cart;