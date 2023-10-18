import React, { useState } from 'react';
import { fetchRecipes } from './api';

const RecipeList = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const data = await fetchRecipes(query);
    setRecipes(data.hits);
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
        {recipes.map((recipe) => (
          <li key={recipe.recipe.uri}>
            <h3>{recipe.recipe.label}</h3>
            <p>Source: {recipe.recipe.source}</p>
            <p>Ingredients: {recipe.recipe.ingredientLines.join(', ')}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;


