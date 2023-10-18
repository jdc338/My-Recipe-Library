export const fetchRecipes = async (query) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/recipes/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { hits: [] }; // Return an empty array in case of an error
  }
};


