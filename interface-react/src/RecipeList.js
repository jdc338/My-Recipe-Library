import React, { useState } from 'react';
import { fetchRecipes } from './api';

const RecipeList = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const data = await fetchRecipes(query);
      // Since the API now returns HTML content, you might need to process it here.
      // For example, if the HTML content contains a list of recipes, you can parse it.

      // Sample code for processing HTML content (you need to adapt this based on your API response):
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const recipeElements = doc.querySelectorAll('.recipe'); // Replace '.recipe' with the actual HTML structure of your recipes

      const parsedRecipes = [];
      recipeElements.forEach((recipeElement) => {
        // Parse the data from the HTML elements and create recipe objects
        const label = recipeElement.querySelector('.label').textContent; // Replace '.label' with the actual HTML structure
        const source = recipeElement.querySelector('.source').textContent; // Replace '.source' with the actual HTML structure
        const ingredients = recipeElement.querySelector('.ingredients').textContent; // Replace '.ingredients' with the actual HTML structure

        parsedRecipes.push({ label, source, ingredients });
      });

      setRecipes(parsedRecipes);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, e.g., set an error state or display a message.
    }
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="text"
        placeholder="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="searchQuery"
        name="searchQuery"
      />
      <button onClick={searchRecipes}>Search</button>
      <h2>Search Results:</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.label}</h3>
            <p>Source: {recipe.source}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            {/* You may add links here if the HTML contains links to the full recipe */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
