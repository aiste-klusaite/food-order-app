import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { ItemMeal } from "../Model/ItemMeal";
import { cartReducer, defaultCartState } from "./cartReducer";

interface CartProviderProps {
    children: React.ReactNode;
}

const CartProvider = ({children}: CartProviderProps) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: ItemMeal) => {
        dispatchCartAction({type: 'ADD', payload: item});
    };

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({type: 'REMOVE', payload: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartProvider;