import React, { useState, useEffect } from "react";
import "../App.css";
import "../Styles/index.css";

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
      <h1 data-testid="mealTitle">{meal.title}</h1>
      <img data-testid="mealImage" src={imageUrl} alt="recipe" className="mealArticle__img"/>
      <ul className="mealArticle__instructions">
        <li data-testid="prepTime">
          Preparation Time: {meal.readyInMinutes} minutes
        </li>
        <li data-testid="servingsNumber">
          Number of servings: {meal.servings}
        </li>
      </ul>
      <button>
        <a data-testid="sourceUrl" className="mealArticle__link" href={meal.sourceUrl}>
          Go to Recipe
        </a>
      </button>
    </article>
  );
};

export default Meal;
