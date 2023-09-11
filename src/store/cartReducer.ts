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
        const updatedItems = state.items.concat(action.payload as ItemMeal);
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
}