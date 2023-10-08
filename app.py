from flask import Flask
from recipe_routes import recipes_bp  # Import the Blueprint

app = Flask(__name__)

# Register the Blueprint with the Flask app
app.register_blueprint(recipes_bp, url_prefix='/recipes')

if __name__ == '__main__':
    app.run(debug=True)
