import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Image } from "react-bootstrap";
import "../Styles/index.css";

const HomeComponent = () => {
  return (
    <div>
      <NavBarComponent />
      <section className="homeDiv">
        <h1 data-testid="homeComponentHeader" className="homeComponentHeader">
          Welcome to the Recipe and Meal Planner API Project!
        </h1>
        <br />
        <Image
          data-testid="homeHeaderImage"
          className="homeDiv__homeHeaderImage"
          src="https://www.recipemash.com/wp-content/uploads/2015/02/lasagna-1024x683.jpg"
          fluid
          loading="lazy"
        />
        <br />
        <h2 className="mealPlannerLink">
          <a href="/mealplanner" data-testid="mealPlannerLink">
            Click here for the Meal Planner based on your diet
          </a>
        </h2>
        <br />
        <h2 className="randomRecipeLink">
          <a href="/random" data-testid="randomRecipeLink">
            Click here for random recipes
          </a>
        </h2>
      </section>
    </div>
  );
};

export default HomeComponent;
