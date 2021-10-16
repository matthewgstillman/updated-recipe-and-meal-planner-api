import React from "react";

const Original = () => {
  const [recipeData, setrecipeData] = useState({
    recipes: [],
  });

  const url = `https://api.spoonacular.com/recipes/716429/information?apiKey=62c09a4a046944019321583648539eae&includeNutrition=true`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const recipeResponse = await response.json();
      console.log(`Recipe Response Data: ${JSON.stringify(recipeResponse)}`);
      setrecipeData({
        recipes: [recipeResponse],
      });
    };
    fetchData();
  }, []);

  console.log(recipeData);

  return (
    <div>
      <div className="App">
        <h1>Recipe API</h1>
        {recipeData.recipes.map((recipe) => (
          <h1>{recipe}</h1>
        ))}
      </div>
    </div>
  );
};

export default Original;
