import React from "react";
import Meal from "./Meal";

const MealList = ({ mealData }) => {
  const nutrients = mealData.nutrients;
  console.log(`Meal List Meal Data: ${mealData}`);
  return (
    <main>
      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
};

export default MealList;
