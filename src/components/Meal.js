import React, { useState, useEffect } from "react";

const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [meal.id]);

  return (
    <article className="mealArticle">
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation Time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <button>
        <a className="sourceUrl" href={meal.sourceUrl}>
          Go to Recipe
        </a>
      </button>
    </article>
  );
};

export default Meal;
