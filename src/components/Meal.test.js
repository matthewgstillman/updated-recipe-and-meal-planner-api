import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Meal from "./Meal";

const mockMeal = jest.fn();

test("Meal Title is in document", () => {
  render(<Meal meal={mockMeal} />);
  const mealTitleElement = screen.getByTestId("mealTitle");
  expect(mealTitleElement).toBeInTheDocument();
});

test("Meal Image is in document", () => {
  render(<Meal meal={mockMeal} />);
  const mealImageElement = screen.getByTestId("mealImage");
  expect(mealImageElement).toBeInTheDocument();
});

test("Prep Time is in document", () => {
  render(<Meal meal={mockMeal} />);
  const prepTimeElement = screen.getByTestId("prepTime");
  expect(prepTimeElement).toBeInTheDocument();
});

test("Servings is in document", () => {
  render(<Meal meal={mockMeal} />);
  const servingsNumberElement = screen.getByTestId("servingsNumber");
  expect(servingsNumberElement).toBeInTheDocument();
});

test("Source URL is in document", () => {
  render(<Meal meal={mockMeal} />);
  const sourceUrlElement = screen.getByTestId("sourceUrl");
  expect(sourceUrlElement).toBeInTheDocument();
});
