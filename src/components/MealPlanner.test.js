import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MealPlanner from "./MealPlanner";

test("Meal Plan Header is in document", () => {
  render(<MealPlanner />);
  const mealPlannerHeaderElement = screen.getByTestId("mealPlanHeader");
  expect(mealPlannerHeaderElement).toBeInTheDocument();
});

test("Meal Plan Parameters Header is in document", () => {
  render(<MealPlanner />);
  const mealPlannerParametersHeaderElement = screen.getByTestId(
    "mealPlanParametersHeader"
  );
  expect(mealPlannerParametersHeaderElement).toBeInTheDocument();
});

test("Meal Plan Calorie Parameters Header is in document", () => {
  render(<MealPlanner />);
  const mealPlannerCalorieParametersHeaderElement = screen.getByTestId(
    "mealPlanCalorieParametersHeader"
  );
  expect(mealPlannerCalorieParametersHeaderElement).toBeInTheDocument();
});

test("Meal Plan Calorie Select Form is in document", () => {
  render(<MealPlanner />);
  const mealPlannerCalorieSelectElement = screen.getByTestId(
    "mealPlannerCaloriesSelect"
  );
  expect(mealPlannerCalorieSelectElement).toBeInTheDocument();
});

test("Meal Plan Dietary Restrictions Header is in document", () => {
  render(<MealPlanner />);
  const mealPlannerDietaryRestrictionsHeaderElement = screen.getByTestId(
    "mealPlannerDietaryRestrictionsHeader"
  );
  expect(mealPlannerDietaryRestrictionsHeaderElement).toBeInTheDocument();
});

test("Meal Plan Dietary Select Form is in document", () => {
  render(<MealPlanner />);
  const mealPlannerDietarySelectElement = screen.getByTestId(
    "mealPlannerDietarySelect"
  );
  expect(mealPlannerDietarySelectElement).toBeInTheDocument();
});

test("Meal Plan Submit Button is in document", () => {
  render(<MealPlanner />);
  const mealPlannerSubmitButtonElement = screen.getByTestId(
    "mealPlannerSubmitButton"
  );
  expect(mealPlannerSubmitButtonElement).toBeInTheDocument();
});
