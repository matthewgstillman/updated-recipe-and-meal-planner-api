import React, { useState } from "react";
import Meal from "./Meal";
import NavBarComponent from "./NavBarComponent";
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const RandomRecipe = () => {
  console.log(`API Key: ${process.env.REACT_APP_API_KEY}`);
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3&tags=`;
  console.log(`URL is: ${URL}`);
  const [randomRecipeDataMeta, setRandomRecipeDataMeta] = useState([{}]);
  const [randomRecipe, setRandomRecipe] = useState([{}]);
  const [cuisineType, setCuisineType] = useState("");
  const [mealType, setMealType] = useState("");

  const handleCuisineChange = (event) => {
    setCuisineType(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const dietFormatDictionary = {
    none: "None",
    "gluten-free": "Gluten Free",
    keto: "Keto",
    vegetarian: "Vegetarian",
    "lacto-vegetarian": "Lacto Vegetarian",
    "ovo-vegetarian": "Ovo Vegetarian",
    paleo: "Paleo",
    primal: "Primal",
    pescetarian: "Pescetarian",
    vegan: "Vegan",
    whole30: "Whole 30",
  };

  const cuisineFormatDictionary = {
    none: "None",
    african: "African",
    american: "American",
    british: "British",
    cajun: "Cajun",
    carribbean: "Carribean",
    chinese: "Chinese",
    european: "European",
    french: "French",
    german: "German",
    greek: "Greek",
    indian: "Indian",
    irish: "Irish",
    italian: "Italian",
    japanese: "Japanese",
    jewish: "Jewish",
    korean: "Korean",
    mediterranean: "Mediterranean",
    mexican: "Mexican",
    nordic: "Nordic",
    southern: "Southern",
    spanish: "Spanish",
    thai: "Thai",
    vietnamese: "Vietnamese",
  };

  const mealTypeFormatDictionary = {
    ",mainCourse": "Main Course",
    ",sideDish": "Side Dish",
    ",dessert": "dessert",
    ",appitizer": "Appitizer",
    ",salad": "Salad",
    ",bread": "Bread",
    ",breakfast": "Breakfast",
    ",soup": "Soup",
    ",beverage": "Beverage",
    ",sauce": "Sauce",
    ",marinade": "Marinade",
    ",fingerfood": "Fingerfood",
    ",snack": "Snack",
  };
  const getRandomRecipe = () => {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=62c09a4a046944019321583648539eae&number=3&tags=${cuisineType}${mealType}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRandomRecipeDataMeta(data["recipes"]);
        setRandomRecipe(data["recipes"][0]["extendedIngredients"]);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  //   console.log(`Random Recipe: ${JSON.stringify(randomRecipe)}`);
  console.log(`Cuisine Type: ${cuisineType} Meal Type: ${mealType}`);

  return (
    <div>
      <NavBarComponent />
      <h1 className="randomRecipeHeader">Random Recipe Data</h1>
      <h3>Select Cuisine and Meal Type (Optional)</h3>
      <select type="text" onChange={handleCuisineChange}>
        <option value="" disabled selected>
          Select cuisine type
        </option>
        <option value="">None</option>
        <option value="german">German</option>
        <option value="indian">Indian</option>
        <option value="irish">Irish</option>
        <option value="italian">Italian</option>
        <option value="japanese">Japanese</option>
        <option value="korean">Korean</option>
        <option value="mediterranean">Mediterranean</option>
        <option value="mexican">Mexican</option>
        <option value="southern">Southern</option>
        <option value="spanish">Spanish</option>
        <option value="thai">Thai</option>
        <option value="vietnamese">Vietnamese</option>
      </select>
      <br></br>
      <select type="text" onChange={handleMealTypeChange}>
        <option value="" disabled selected>
          Select meal type
        </option>
        <option value="">None</option>
        <option value="main-course">Main Course</option>
        <option value=",dessert">Dessert</option>
        {cuisineType === "Japanese" ? (
          <></>
        ) : (
          <option value=",appitizer">Appitizer</option>
        )}
        {cuisineType === "korean" || "vietnamese" ? (
          <></>
        ) : (
          <option value=",breakfast">Breakfast</option>
        )}
        <option value=",soup">Soup</option>
        <option value=",sauce">Sauce</option>
        <option value=",snack">Snack</option>
      </select>
      <br></br>
      <button className="randomRecipeButton" onClick={getRandomRecipe}>
        Get Random Recipe
      </button>
      <br />
      {randomRecipeDataMeta &&
        randomRecipeDataMeta.map((randomMeta) => (
          <div>
            <hr />
            <br />
            <a href={randomMeta.sourceUrl}>
              <h1 className="recipeTitleLink">{randomMeta.title}</h1>
            </a>
            <br />
            {randomMeta.readyInMinutes ? (
              <h6>Ready in {randomMeta.readyInMinutes} minutes</h6>
            ) : (
              <></>
            )}
            <br />
            {randomMeta.image ? (
              <img className="randomMetaImage" src={randomMeta.image} alt="" />
            ) : (
              <></>
            )}
            <div
              className="summaryParagraph"
              dangerouslySetInnerHTML={{ __html: randomMeta.summary }}
            />
            <br />
            {randomMeta.instructions ? (
              <div>
                <h1>Instructions</h1>
                <div
                  className="instructionsParagraph"
                  dangerouslySetInnerHTML={{ __html: randomMeta.instructions }}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      <h1>Ingredients</h1>
      {randomRecipe &&
        randomRecipe.map((recipe) => (
          <div>
            <h6>
              {recipe["amount"]} {recipe["unit"]} {recipe["originalName"]}
            </h6>
          </div>
        ))}
    </div>
  );
};

export default RandomRecipe;
