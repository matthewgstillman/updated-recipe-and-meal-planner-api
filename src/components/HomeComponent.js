import React from "react";
import NavBarComponent from "./NavBarComponent";
import UpdatedNavBarComponent from "./UpdatedNavBarComponent";
import { Image } from "react-bootstrap";

const HomeComponent = () => {
  return (
    <div className="homeDiv">
      <UpdatedNavBarComponent />
      <Image
        data-testid="homeHeaderImage"
        className="homeHeaderImage"
        src="https://www.recipemash.com/wp-content/uploads/2015/02/lasagna-1024x683.jpg"
        fluid
      />
      <h1 data-testid="homeComponentHeader">
        Welcome to the Recipe and Meal Planner API Project!
      </h1>
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
  );
};

export default HomeComponent;
