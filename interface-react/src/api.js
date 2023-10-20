export const fetchRecipes = async (query) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/recipes/search?q=${query}`, {
      headers: {
        Accept: 'text/html', // Specify that you expect HTML content
      },
    });

    if (!response.ok) {
      // Handle non-success status codes
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('text/html')) {
      // If the response is HTML, you can handle it as needed
      const htmlContent = await response.text();

      // Process the HTML content, e.g., by creating a DOM element and extracting data
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');

      // Define the extractDataFromDOM function
      function extractDataFromDOM(document) {
        const recipeData = [];

        // Replace these selectors with the actual HTML structure of your recipes
        const recipeElements = document.querySelectorAll('.recipe');

        recipeElements.forEach((recipeElement) => {
          const label = recipeElement.querySelector('.label').textContent; // Replace '.label' with the actual HTML structure
          const source = recipeElement.querySelector('.source').textContent; // Replace '.source' with the actual HTML structure
          const ingredients = recipeElement.querySelector('.ingredients').textContent; // Replace '.ingredients' with the actual HTML structure

          recipeData.push({
            label,
            source,
            ingredients,
          });
        });

        return recipeData;
      }


      // Call the extractDataFromDOM function with the 'doc' as the argument
      const recipeData = extractDataFromDOM(doc);
      console.log('Recipe Data from HTML:', recipeData);

      return recipeData;
    } else {
      console.error('Response is not in HTML format:', response);
      return { hits: [] }; // Return an empty array or handle it as needed
    }
  } catch (error) {
    console.error(error);
    return { hits: [] };
  }
};
