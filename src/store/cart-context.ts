import React, { createContext } from "react";
import { ItemMeal} from "../Model/ItemMeal";

type CartContent = {
    items: ItemMeal[];
    totalAmount: number;
    addItem: (item: ItemMeal) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContent>({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

export default CartContext;