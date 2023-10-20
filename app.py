from flask import Flask
from recipe_routes import recipes_bp
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Register the Blueprint with the Flask app
app.register_blueprint(recipes_bp, url_prefix='/recipes')


if __name__ == '__main__':
    print("Starting the Recipe Library...")
    app.run(debug=True)
