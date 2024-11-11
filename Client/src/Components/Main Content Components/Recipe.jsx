import React, { useState } from 'react';
import axios from 'axios';
import './recipe.css';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);

    const options = {
      method: 'GET',
      url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
      params: { query },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RECIPE_API,
        'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setRecipes(response.data);
      setCurrentRecipeIndex(0); // Start at the first recipe
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchRecipes();
    }
  };

  const handleNextRecipe = () => {
    if (currentRecipeIndex < recipes.length - 1) {
      setCurrentRecipeIndex(currentRecipeIndex + 1);
    } else {
      alert('Out of recipes');
    }
  };

  const handlePrevRecipe = () => {
    if (currentRecipeIndex > 0) {
      setCurrentRecipeIndex(currentRecipeIndex - 1);
    } else {
      alert('This is the first recipe');
    }
  };

  const currentRecipe = recipes[currentRecipeIndex];

  return (
    <div className="recipe-app">
      <div className="search-section">
        <h1 className="greeting">Healthy Recipe Generator</h1>
        <div>
          <input
            type="text"
            placeholder="Enter recipe name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </div>

      {loading && <div className="loading-message">Loading...</div>}
      {error && <div className="error-message">Error: {error.message}</div>}

      {currentRecipe ? (
        <div className="recipe-card">
          <div className="recipe-info">
            <div>
              <h3>{currentRecipe.title}</h3>
              <p><strong>Servings:</strong> {currentRecipe.servings}</p>
              <p><strong>Ingredients:</strong></p>
              <ul className="ingredients-list">
                {currentRecipe.ingredients.split('|').map((ingredient, i) => (
                  <li key={i}>{ingredient.trim()}</li>
                ))}
              </ul>
            </div>
            <div>
              <p><strong>Instructions:</strong></p>
              <p>{currentRecipe.instructions}</p>
            </div>
          </div>
          <div className="button-group">
            <button onClick={handlePrevRecipe} className="prev-button">Prev</button>
            <button onClick={handleNextRecipe} className="next-button">Next</button>
          </div>
        </div>
      ) : (
        !loading && <p className="error-message">No recipes found.</p>
      )}
    </div>
  );
};

export default Recipe;
