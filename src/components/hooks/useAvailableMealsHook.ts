import { useEffect, useState } from "react";
import { ItemMeal } from "../../Model/ItemMeal";


const useAvailableMealsHook = () => {
    const [meals, setMeals] = useState<Partial<ItemMeal | undefined>[]>([]);
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
                mealId: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            });
         }
         setMeals(loadedMeals);
         setIsLoading(false);
        }

        fetchMeals().catch((error: Error) => {
            setIsLoading(false);
            setHttpError(error.message)
        });
    }, [])


    return {
        meals,
        isLoading,
        httpError,
    }
}

export default useAvailableMealsHook;