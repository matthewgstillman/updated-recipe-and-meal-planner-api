# React Recipe and Meals API Project

This document will go over some of the components used in this React project that makes use of the Spoonacular API to get recipe data.

## Spoonacular API Key

**It's important that you obtain an API key from [Spoonacular API](https://spoonacular.com/food-api) prior to using this project**

For documentation about the **Spoonacular API**, click [here](https://spoonacular.com/food-api/docs). Pricing information about the API can be found [here](https://spoonacular.com/food-api/pricing) which included the free tier.

Once an API Key has been obtained, create a **.env.local** file in the root folder and create an environment variable called **REACT_APP_API_KEY**.

## Main Routes and Components Used

There are two main components you will deal with using this project: **Meal Planner** and **Random Recipe Generator**

- **Meal Planner**

To use the Meal Planner, click on the **Meal Planner** link on the top Navigation bar.

The **Meal Planner** has a parameter for desired daily calorie level from 1500-4000. There's also an optional parameter for diet type with the following options:

- Gluten Free
- Keto
- Vegetarian
- Ovo-Vegetarian
- Paleo
- Primal
- Pescatarian
- Vegan
- Whole 30

When your desired daily calorie level been selected (as well as the optional diet type), click on the **Get Daily Meal Plan** button to get a appropriate meal plan with 3 meals for the day.

## Random Recipe Generator

To use the Random Recipe Generator, click on the **Random Recipe Generator** link on the top Navigation bar.

The **Random Recipe Generator** has an optional parameter for cuisine type with the following options:

- German
- Indian
- Irish
- Italian
- Jewish
- Korean
- Mediterranean
- Southern
- Spanish
- Thai
- Vietnamese

Whether or not the optional cuisine type parameter has been chosen, click on the **Get Random Recipes** button to get 3 random recipes.
