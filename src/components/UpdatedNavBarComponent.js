import React from "react";

const UpdatedNavBarComponent = () => {
  return (
    <div className="mainNavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Recipe and Meal Planner API
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div clasName="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/mealplanner"
                data-testid="navBarMealPlannerLink"
              >
                Meal Planner
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/random"
                data-testid="navBarRandomLink"
              >
                Random Recipe
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default UpdatedNavBarComponent;
