
from flask import Blueprint, jsonify, render_template, request
import requests  # Import the requests library

# Define a Blueprint for your recipe-related routes
recipes_bp = Blueprint('recipes', __name__)

@recipes_bp.route('/search', methods=['GET'])
def recipe_search():
    # Get the user's search query from the URL parameters
    query = request.args.get('q')

    # Replace 'YOUR_API_KEY' with your actual Spoonacular API key
    api_key = 'bff40525d23043138c1ca9561fd38662'

    # Construct the URL with your API key
    url = f'https://api.spoonacular.com/recipes/search?query={query}&apiKey={api_key}'

    # Make a request to the Spoonacular API
    response = requests.get(url)

    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Extract relevant recipe data from the response
        recipes = data.get('results', [])

        # Render the search.html template with the search results
        return render_template('interface.html', recipes=recipes)
    else:
        # Handle API errors
        return jsonify({'error': 'Failed to fetch recipes from Spoonacular API'}), 500
