import "./App.css";
import React from "react";
import RandomRecipe from "./components/RandomRecipe";
import MealPlanner from "./components/MealPlanner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
        </Switch>
        <Switch>
          <Route exact path="/mealplanner" component={MealPlanner} />
        </Switch>
        <Switch>
          <Route exact path="/random" component={RandomRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
