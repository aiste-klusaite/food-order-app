import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../../assets/Icons/CartIcon";
import classes from './HeaderCartButton.module.scss';
import CartContext from "../../store/cart-context";

interface HeaderCartButtonProps {
    onClick: () => void;
}

const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({onClick}) => {
    const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${btnIsHightlighted ? classes.bump : ''}`;

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (!items.length) {
            return;
        }
        setBtnIsHighlighted(true);

        setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            timer !== null && clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={buttonClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )

};

export default HeaderCartButton;