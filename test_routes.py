# test_routes.py (unit test file)
import unittest
from flask import Flask
from flask_testing import TestCase
from your_app import create_app  # Import your Flask app

class TestRoutes(TestCase):
    def create_app(self):
        app = create_app()  # Create your Flask app
        app.config['TESTING'] = True
        return app

    def test_get_recipes(self):
        response = self.client.get('/recipes/api/recipes')
        self.assertEqual(response.status_code, 200)
        # Add more assertions to test the response data

    def test_create_recipe(self):
        data = {'name': 'New Recipe', 'ingredients': ['Ingredient 1'], 'instructions': 'Step 1'}
        response = self.client.post('/recipes/api/recipes', json=data)
        self.assertEqual(response.status_code, 201)
        # Add more assertions to test the response data

    # Add more test cases for other routes

if __name__ == '__main__':
    unittest.main()
