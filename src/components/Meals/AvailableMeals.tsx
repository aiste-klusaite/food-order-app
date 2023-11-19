import React from "react";

import classes from './AvailableMeals.module.scss';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useAvailableMealsHook from "../hooks/useAvailableMealsHook";
import { ItemMeal } from "../../Model/ItemMeal";

const AvailableMeals: React.FC = () => {
    const {meals, isLoading, httpError} = useAvailableMealsHook();

    const mealsList = meals.map((meal: Partial<ItemMeal | undefined>) => 
        <MealItem
            mealId={meal?.mealId ?? ''}
            key={meal?.mealId ?? ''} 
            name={meal?.name ?? ''} 
            description={meal?.description} 
            price={meal?.price ?? 0} 
        />);


    if (isLoading) {
      return <section className={classes.isLoading}><p>...Loading</p></section>
    }

    if (httpError) {
        return <section className={classes.mealsError}><p>{httpError}</p></section>
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;