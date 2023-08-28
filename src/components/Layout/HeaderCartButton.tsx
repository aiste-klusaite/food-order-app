import React from "react";

import CartIcon from "../../assets/Icons/CartIcon";
import classes from './HeaderCartButton.module.scss';

interface HeaderCartButtonProps {
    onClick: () => void;
}

const HeaderCartButton: React.FC<HeaderCartButtonProps> = ({onClick}) => {
    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )

};

export default HeaderCartButton;