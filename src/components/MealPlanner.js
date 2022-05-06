import React, { useState } from "react";
import MealList from "./MealList";
import NavbarComponent from "./NavBarComponent";
import { Image, Form } from "react-bootstrap";
import "../Styles/index.css";
import "../App.css";

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
    setMealPlanSubmitted(true);
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${dietType}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.error("error");
      });
  };

  return (
    <div>
      <section className="mealPlan">
        <NavbarComponent />
        <h1 data-testid="mealPlanHeader" className="mealPlan__header">
          Meal Planner
        </h1>
        {mealPlanSubmitted === false ? (
          <Image
            data-testid="homeHeaderImage"
            className="homeHeaderImage"
            src="https://spoonacular.com/recipeImages/641911-556x370.jpg"
            fluid
          />
        ) : (
          <></>
        )}
        <h3 data-testid="mealPlanParametersHeader">
          Create a Daily Meal Plan by Providing Your Calories and Diet Type
        </h3>
        <br />
        <h4 data-testid="mealPlanCalorieParametersHeader">
          Desired Daily Calories (1500-4000)
        </h4>
        <Form.Select
          aria-label="Select Cuisine"
          data-testid="mealPlannerCaloriesSelect"
          type="text"
          onChange={handleCalorieChange}
          className="mealPlan__formSelectInput"
        >
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
        </Form.Select>
        <br />
        <br />
        <h4 data-testid="mealPlannerDietaryRestrictionsHeader">
          Add dietary restrictions (Optional)
        </h4>
        <Form.Select
          type="text"
          data-testid="mealPlannerDietarySelect"
          placeholder="Diet Type"
          onChange={handleDietChange}
        >
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
        </Form.Select>
        <br />
        <br />
        <button data-testid="mealPlannerSubmitButton" className="mealPlannerSumbmitButton" onClick={getMealData}>
          Get Daily Meal Plan
        </button>
        <br />
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
