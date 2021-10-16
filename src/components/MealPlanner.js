import "../App.css";
import React, { useState } from "react";
import MealList from "./MealList";
import RandomRecipe from "./RandomRecipe";
import NavbarComponent from "./NavBarComponent";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MealPlanner = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(null);
  const [dietType, setDietType] = useState("none");
  const [mealPlanSubmitted, setMealPlanSubmitted] = useState(false);

  const handleCalorieChange = (event) => {
    setCalories(event.target.value);
  };

  const handleDietChange = (event) => {
    setDietType(event.target.value);
    console.log(`Diet type: ${dietType}`);
  };

  const dietFormatDictionary = {
    none: "None",
    "gluten-free": "Gluten Free",
    keto: "Keto",
    vegetarian: "Vegetarian",
    "lacto-vegetarian": "Lacto Vegetarian",
    "ovo-vegetarian": "Ovo Vegetarian",
    paleo: "Paleo",
    primal: "Primal",
    pescetarian: "Pescetarian",
    vegan: "Vegan",
    whole30: "Whole 30",
  };

  const getMealData = () => {
    console.log(`Calories: ${calories}, Diet: ${dietType}`);
    setMealPlanSubmitted(true);
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=62c09a4a046944019321583648539eae&timeFrame=day&targetCalories=${calories}&diet=${dietType}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div>
      <NavbarComponent />
      <section className="controls">
        <h1 className="mealPlanHeader">Meal Plan</h1>
        <h3>
          Create a Daily Meal Plan by Providing Your Calories and Diet Type
        </h3>
        <h3>Desired Daily Calories (1500-4000)</h3>
        <select type="number" onChange={handleCalorieChange}>
          <option value="1500">1500</option>
          <option value="1750">1750</option>
          <option value="2000">2000</option>
          <option value="2250">2250</option>
          <option value="2500">2500</option>
          <option value="2750">2750</option>
          <option value="3000">3000</option>
          <option value="3250">3250</option>
          <option value="3500">3500</option>
          <option value="3750">3750</option>
          <option value="4000">4000</option>
        </select>
        <br />
        <h3>Add dietary restrictions (Optional)</h3>
        <select type="text" placeholder="Diet Type" onChange={handleDietChange}>
          <option value="">None</option>
          <option value="gluten-free">Gluten Free</option>
          <option value="keto">Keto</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="lacto-vegetarian">Lacto-Vegetarian</option>
          <option value="ovo-vegetarian">Ovo-Vegetarian</option>
          <option value="paleo">Paleo</option>
          <option value="primal">Primal</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="vegan">Vegan</option>
          <option value="whole30">Whole 30</option>
        </select>
        <br />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        <br />
        <br />
        <h1>
          {calories && dietType !== "none" && mealPlanSubmitted ? (
            `${calories} Calorie ${dietFormatDictionary[dietType]} Meal Plan`
          ) : (
            <></>
          )}
        </h1>
        {mealData && <MealList mealData={mealData} />}
      </section>
    </div>
  );
};

export default MealPlanner;
