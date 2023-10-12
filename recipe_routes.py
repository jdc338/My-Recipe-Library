from flask import Blueprint, jsonify, render_template, request
import requests
import os
# Define a Blueprint for your recipe-related routes
recipes_bp = Blueprint('recipes', __name__)

@recipes_bp.route('/search', methods=['GET'])
def recipe_search():
    # Get the user's search query from the URL parameters
    query = request.args.get('q')

    # You can put your API keys here or load them from environment variables
    edamam_app_id = os.environ.get('EDAMAM_APP_ID')
    edamam_api_key = os.environ.get('EDAMAM_API_KEY')

    # Make a request to an external API (replace with your desired API)
    url = f'https://api.edamam.com/search?q={query}&app_id={edamam_app_id}&app_key={edamam_api_key}'

    response = requests.get(url)

    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Extract relevant recipe data from the response
        recipes = data.get('hits', [])

        # Render a template with the search results
        return render_template('search_results.html', recipes=recipes)
    else:
        # Handle API errors
        return jsonify({'error': 'Failed to fetch recipes from the API'}), 500
