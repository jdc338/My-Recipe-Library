from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

recipes = [
    {
        'id': 1,
        'name': 'Spaghetti Carbonara',
        'ingredients': ['Spaghetti', 'Eggs', 'Guanciale', 'Pecorino cheese', 'Black pepper'],
        'instructions': '...'
    },
    {
        'id': 2,
        'name': 'Chicken Alfredo',
        'ingredients': ['Fettuccine', 'Chicken', 'Heavy cream', 'Parmesan cheese'],
        'instructions': '...'
    },
    # Add more recipes here
]

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    return jsonify(recipes)

if __name__ == '__main__':
    app.run(debug=True)

# Inside your Flask app (app.py)
