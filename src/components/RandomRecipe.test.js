import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomRecipe from "./RandomRecipe";

test("Random Recipe Header is in document", () => {
  render(<RandomRecipe />);
  const randomRecipeHeaderElement = screen.getByTestId("randomRecipeHeader");
  expect(randomRecipeHeaderElement).toBeInTheDocument();
});

test("Cuisine Type Header is in document", () => {
  render(<RandomRecipe />);
  const randomRecipeCuisineTypeHeaderElement = screen.getByTestId(
    "randomRecipeCuisineTypeHeader"
  );
  expect(randomRecipeCuisineTypeHeaderElement).toBeInTheDocument();
});

test("Random Recipe Select Form is in document", () => {
  render(<RandomRecipe />);
  const randomRecipeSelectFormElement = screen.getByTestId(
    "randomRecipeSelectForm"
  );
  expect(randomRecipeSelectFormElement).toBeInTheDocument();
});
