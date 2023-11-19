import React, { useEffect, useState} from "react";

import classes from './AvailableMeals.module.scss';
// import { dummyMeals } from "../../assets/Data/DummyMeals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const AvailableMeals: React.FC = () => {
    const [meals, setMeals] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState('');

    useEffect(() => {
        const fetchMeals = async () => {
         const response = await fetch('https://react-food-app-c6a8e-default-rtdb.europe-west1.firebasedatabase.app/Meals.json');
         
         if (!response.ok) {
            throw new Error('Something went wrong!');
         };

         const responseData = await response.json();

         const loadedMeals = [];

         for (const key in responseData) {
            loadedMeals.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            });
         }
         setMeals(loadedMeals);
         setIsLoading(false);
         console.log(loadedMeals);
        }

        fetchMeals().catch((error: Error) => {
            setIsLoading(false);
            setHttpError(error.message)
        });
    }, [])

    const mealsList = meals.map((meal: any) => 
        <MealItem
            mealId={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price} 
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