import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Styles/index.css";

const NavBarComponent = () => {
  return (
    <div>
      <Navbar data-testid="navBarMain" bg="dark" fixed="top" variant="dark">
        <Container data-testid="navBarContainer">
          <Navbar.Brand href="/" data-testid="navBarHomeLink">
            FOOD PROJECT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            data-testid="responsiveNavBar"
          >
            <Nav className="me-auto">
              <Nav.Link
                href="/mealplanner"
                data-testid="navBarMealPlannerLink"
                className="navBarLink"
              >
                Meal Planner
              </Nav.Link>
              <Nav.Link
                href="/random"
                data-testid="navBarRandomLink"
                className="navBarLink"
              >
                Random Recipe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
