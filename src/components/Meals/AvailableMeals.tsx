import React from "react";

import classes from './AvailableMeals.module.scss';
import { dummyMeals } from "../../assets/Data/DummyMeals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals: React.FC = () => {
    const mealsList = dummyMeals.map((meal) => 
        <MealItem
            mealId={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price} 
        />);

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