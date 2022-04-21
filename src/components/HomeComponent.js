import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Image } from "react-bootstrap";
import "../App.css";

const HomeComponent = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="homeDiv">
        <h1 data-testid="homeComponentHeader">
          Welcome to the Recipe and Meal Planner API Project!
        </h1>
        <br />
        <Image
          data-testid="homeHeaderImage"
          className="homeHeaderImage"
          src="https://www.recipemash.com/wp-content/uploads/2015/02/lasagna-1024x683.jpg"
          fluid
        />
        <br />
        <h2>
          <a href="/mealplanner" data-testid="mealPlannerLink">
            Click here for the Meal Planner based on your diet
          </a>
        </h2>
        <br />
        <h2>
          <a href="/random" data-testid="randomRecipeLink">
            Click here for random recipes
          </a>
        </h2>
      </div>
    </div>
  );
};

export default HomeComponent;
