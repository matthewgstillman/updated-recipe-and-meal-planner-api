import { render, screen } from "@testing-library/react";
import App from "./App";

// test("Router Links in document", () => {
//   render(<App />);
//   const homeComponentElement = screen.getByTestId("homeComponentRoute");
//   const mealPlannerComponentElement = screen.getByTestId(
//     "mealPlannerComponentRoute"
//   );
//   const randomRecipeComponentElement = screen.getByTestId(
//     "randomRecipeComponentRoute"
//   );
//   expect(homeComponentElement).toBeInTheDocument();
//   expect(mealPlannerComponentElement).toBeInTheDocument();
//   expect(randomRecipeComponentElement).toBeInTheDocument();
// });

const add = (x, y) => {
  return x + y;
};

test("Mock Addition test", () => {
  expect(add(1, 2)).toBe(3);
});
