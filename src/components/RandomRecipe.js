import React, { useState } from "react";
import NavBarComponent from "./NavBarComponent";
import { Image, Form } from "react-bootstrap";
import "../Styles/index.css";

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
        window.scrollTo(0, 30);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="randomRecipe__Box">
      <NavBarComponent />
      <h1 className="randomRecipe__Header" data-testid="randomRecipeHeader">
        Random Recipe Generator
      </h1>
      <br />
      {recipeSubmitted === false ? (
        <div>
          <Image
            data-testid="homeHeaderImage"
            className="homeHeaderImage"
            src="https://spoonacular.com/recipeImages/660290-556x370.jpg"
            fluid
            loading="lazy"
          />
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
            <option value="korean">Korean</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
          </Form.Select>
          <br></br>
          <button className="randomRecipe__Button" onClick={getRandomRecipe}>
            Get Random Recipes
          </button>
          <br />
        </div>
      ) : (
        <div>
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
            <option value="korean">Korean</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
          </Form.Select>
          <br></br>
          <button className="randomRecipe__Button" onClick={getRandomRecipe}>
            Get Random Recipes
          </button>
          <br />
          {randomRecipeDataMeta &&
            randomRecipeDataMeta.map((randomMeta, index) => (
              <div key={index} className="randomRecipe__Card">
                <br />
                <a href={randomMeta.sourceUrl}>
                  <h1 className="randomRecipe__TitleLink">
                    {randomMeta.title}
                  </h1>
                </a>
                <br />
                {randomMeta.readyInMinutes ? (
                  <h6>Ready in {randomMeta.readyInMinutes} minutes</h6>
                ) : (
                  <></>
                )}
                <br />
                {randomMeta.image ? (
                  <div className="randomRecipe__MetaImageBox">
                    <img
                      className="randomRecipe__MetaImage"
                      src={randomMeta.image}
                      alt=""
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className="randomRecipe__SummaryParagraph"
                  dangerouslySetInnerHTML={{ __html: randomMeta.summary }}
                />
                <br />
                {randomMeta.instructions ? (
                  <div>
                    <h1>Instructions</h1>
                    <div
                      className="randomRecipe__InstructionsParagraph"
                      dangerouslySetInnerHTML={{
                        __html: randomMeta.instructions,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}
                <br />
                <div className="randomRecipe__IngredientsParagraph">
                  {randomMeta.extendedIngredients ? (
                    <h1>Ingredients</h1>
                  ) : (
                    <></>
                  )}
                  {randomMeta.extendedIngredients &&
                    randomMeta.extendedIngredients.map((ingredient, i) => {
                      return <h6 key={i}>{ingredient.original}</h6>;
                    })}
                </div>
                <br></br>
              </div>
            ))}
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default RandomRecipe;
