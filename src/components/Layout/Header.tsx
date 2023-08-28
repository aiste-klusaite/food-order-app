import React, { Fragment } from "react";

import mealsImage from '../../assets/mealsImage.jpg';
import classes from './Header.module.scss';
import HeaderCartButton from "./HeaderCartButton";

interface HeaderProps {
    onShowCart: () => void;
}

const Header: React.FC<HeaderProps> = ({onShowCart}) => {
    return (
        <Fragment>  
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food" />
            </div>
        </Fragment>
    )
};

export default Header;