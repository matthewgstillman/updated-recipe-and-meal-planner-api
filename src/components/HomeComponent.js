import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Image } from "react-bootstrap";

const HomeComponent = () => {
  // console.log(
  //   `Process.env Test Variable is: ${process.env.REACT_APP_TEST_VARIABLE}`
  // );
  return (
    <div>
      <NavBarComponent />
      <Image
        className="homeHeaderImage"
        src="https://www.recipemash.com/wp-content/uploads/2015/02/lasagna-1024x683.jpg"
        fluid
      />
      <h1>Welcome to the Food API Project!</h1>
      <br />
      <h2>
        <a href="/mealplanner">
          Click here for the Meal Planner based on your diet
        </a>
      </h2>
      <br />
      <h2>
        <a href="/random">Click here for random recipes</a>
      </h2>
    </div>
  );
};

export default HomeComponent;
