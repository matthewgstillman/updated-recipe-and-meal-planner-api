import React from "react";
import Meal from "./Meal";

const MealList = ({ mealData }) => {
  return (
    <main>
      <section data-testid="mealList" className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
};

export default MealList;
