import React from "react";
import { dummyMeals } from "../../assets/Data/DummyMeals";

const AvailableMeals: React.FC = () => {
    const mealsList = dummyMeals.map((meal) => <li>{meal.name}</li>);

    return (
        <section>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
};

export default AvailableMeals;