import React from "react";
import CartIcon from "../../assets/Icons/CartIcon";
import classes from './HeaderCartButton.module.scss';


const HeaderCartButton: React.FC = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )

};

export default HeaderCartButton;