import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeComponent from "./HomeComponent";

test("Home Component Header is in document", () => {
  render(<HomeComponent />);
  const homeComponentHeaderElement = screen.getByTestId("homeComponentHeader");
  expect(homeComponentHeaderElement).toBeInTheDocument();
});

test("Home Component Image is in document", () => {
  render(<HomeComponent />);
  const homeHeaderImageElement = screen.getByTestId("homeHeaderImage");
  expect(homeHeaderImageElement).toBeInTheDocument();
});

test("Meal Planner Link is in document", () => {
  render(<HomeComponent />);
  const mealPlannerLinkElement = screen.getByTestId("mealPlannerLink");
  expect(mealPlannerLinkElement).toBeInTheDocument();
});

test("Random Recipe Link is in document", () => {
  render(<HomeComponent />);
  const randomRecipeLinkElement = screen.getByTestId("randomRecipeLink");
  expect(randomRecipeLinkElement).toBeInTheDocument();
});
