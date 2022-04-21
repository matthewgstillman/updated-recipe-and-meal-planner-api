import React, { useState } from "react";
import NavBarComponent from "./NavBarComponent";
import { Image, Form } from "react-bootstrap";
import "../App.css";

const RandomRecipe = () => {
  const [randomRecipeDataMeta, setRandomRecipeDataMeta] = useState([{}]);
  const [cuisineType, setCuisineType] = useState("");
  const [recipeSubmitted, setRecipeSubmitted] = useState(false);
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3&tags=${cuisineType}`;

  const handleCuisineChange = (event) => {
    setCuisineType(event.target.value);
  };

  const getRandomRecipe = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRandomRecipeDataMeta(data["recipes"]);
        setRecipeSubmitted(true);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="randomRecipeBox">
      <NavBarComponent />
      <h1 className="randomRecipeHeader" data-testid="randomRecipeHeader">
        Random Recipe Generator
      </h1>
      <br />
      {recipeSubmitted === false ? (
        <Image
          data-testid="homeHeaderImage"
          className="homeHeaderImage"
          src="https://spoonacular.com/recipeImages/660290-556x370.jpg"
          fluid
        />
      ) : (
        <></>
      )}
      <h3 data-testid="randomRecipeCuisineTypeHeader">
        Select Cuisine Type (Optional)
      </h3>
      <Form.Select
        aria-label="Select Cuisine"
        data-testid="randomRecipeSelectForm"
        type="text"
        onChange={handleCuisineChange}
      >
        <option value="" disabled selected>
          Select cuisine type
        </option>
        <option value="">None</option>
        <option value="german">German</option>
        <option value="indian">Indian</option>
        <option value="irish">Irish</option>
        <option value="italian">Italian</option>
        <option value="jewish">Jewish</option>
        <option value="korean">Korean</option>
        <option value="mediterranean">Mediterranean</option>
        <option value="southern">Southern</option>
        <option value="spanish">Spanish</option>
        <option value="thai">Thai</option>
        <option value="vietnamese">Vietnamese</option>
      </Form.Select>
      <br></br>
      <button className="randomRecipeButton" onClick={getRandomRecipe}>
        Get Random Recipes
      </button>
      <br />
      {randomRecipeDataMeta &&
        randomRecipeDataMeta.map((randomMeta) => (
          <div className="randomRecipeCard">
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
                  dangerouslySetInnerHTML={{
                    __html: randomMeta.instructions,
                  }}
                />
              </div>
            ) : (
              <></>
            )}
            <br />
            {randomMeta.extendedIngredients ? <h1>Ingredients</h1> : <></>}
            {randomMeta.extendedIngredients &&
              randomMeta.extendedIngredients.map((ingredient) => {
                return <h6>{ingredient.original}</h6>;
              })}
            <br></br>
          </div>
        ))}
      <br />
      <br />
    </div>
  );
};

export default RandomRecipe;
