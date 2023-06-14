
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=1b7f79431cb84d14b3b121f81279c68f `
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Spoonacular Recipes</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {recipes.map((recipe) => (
          <ul key={recipe.id}>
            <img src={recipe.image} alt={recipe.title}  />
            <span>{recipe.title}</span>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default App;

