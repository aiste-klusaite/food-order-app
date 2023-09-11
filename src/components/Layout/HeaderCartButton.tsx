import React, { useContext } from "react";

import CartIcon from "../../assets/Icons/CartIcon";
import classes from './HeaderCartButton.module.scss';
import CartContext from "../../store/cart-context";

interface HeaderCartButtonProps {
    onClick: () => void;
}

const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({onClick}) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )

};

export default HeaderCartButton;