import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavbarComponent from "./NavbarComponent";

test("Meal Plan Header is in document", () => {
  render(<NavbarComponent />);
  const navBarMainElement = screen.getByTestId("navBarMain");
  expect(navBarMainElement).toBeInTheDocument();
});

test("Container is in the document", () => {
  render(<NavbarComponent />);
  const navBarContainerElement = screen.getByTestId("navBarContainer");
  expect(navBarContainerElement).toBeInTheDocument();
});

test("Home Link is in the document", () => {
  render(<NavbarComponent />);
  const nnavBarHomeLinkElement = screen.getByTestId("navBarHomeLink");
  expect(nnavBarHomeLinkElement).toBeInTheDocument();
});

test("Meal Planner Link is in the document", () => {
  render(<NavbarComponent />);
  const navBarMealPlannerLinkElement = screen.getByTestId(
    "navBarMealPlannerLink"
  );
  expect(navBarMealPlannerLinkElement).toBeInTheDocument();
});

test("Random Link is in the document", () => {
  render(<NavbarComponent />);
  const navBarRandomLinkElement = screen.getByTestId("navBarRandomLink");
  expect(navBarRandomLinkElement).toBeInTheDocument();
});

test("Responsive Navbar is in the document", () => {
  render(<NavbarComponent />);
  const responsiveNavBarElement = screen.getByTestId("responsiveNavBar");
  expect(responsiveNavBarElement).toBeInTheDocument();
});
