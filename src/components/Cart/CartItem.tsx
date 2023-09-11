import React from 'react';
import classes from './CartItem.module.scss';
import { ItemMeal } from '../../Model/ItemMeal';
import { on } from 'events';

interface CartItemProps {
    item: ItemMeal;
    onRemove: (id: string) => void;
    onAdd: (item: ItemMeal) => void;
}

const CartItem: React.FC<CartItemProps> = ({item, onRemove, onAdd}) => {
  const modifiedPrice = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{modifiedPrice}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemove(item.mealId)}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;