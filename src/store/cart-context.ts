import React, { createContext } from "react";
import { ItemMeal} from "../Model/ItemMeal";

type CartContent = {
    items: ItemMeal[];
    totalAmount: number;
    addItem: (item: ItemMeal) => void;
    removeItem: (id: string) => void;
}

const CartContext = createContext<CartContent>({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {}
});

export default CartContext;