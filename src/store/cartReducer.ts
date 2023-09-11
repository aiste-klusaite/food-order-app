import { act } from "react-dom/test-utils";
import { ItemMeal } from "../Model/ItemMeal";

interface AddToCartAction {
    type: 'ADD';
    payload: ItemMeal;
}

interface RemoveFromCartAction {
    type: 'REMOVE';
    payload: string;
}

interface cartState {
    items: ItemMeal[],
    totalAmount: number,
}

export type CartAction = AddToCartAction | RemoveFromCartAction;

export const defaultCartState: cartState = {
    items: [],
    totalAmount: 0,
};

export const cartReducer = (state: cartState, action: CartAction) => {

    if (action.type === 'ADD') {
        const existingCartItemIndex = state.items.findIndex((item: ItemMeal) => item.mealId === action.payload.mealId);
        const existingCartItem = state.items[existingCartItemIndex];
    
        let updatedItem;
        let updatedItems;
        let updatedTotalAmount;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1,
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            updatedTotalAmount = state.totalAmount + existingCartItem.price * 1;
        } else {
            updatedItems = state.items.concat(action.payload);
            updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item: ItemMeal) => item.mealId === action.payload);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.mealId !== action.payload)
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}