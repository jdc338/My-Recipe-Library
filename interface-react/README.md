# Recipe Data Analysis

## Objective

The Recipe Data Analysis project aims to collect, process, and analyze recipe data from the Spoonacular API. It enables users to search for recipes based on their preferences, view recipe details, and discover new cooking ideas. This application simplifies the process of finding and exploring recipes, making it an excellent tool for home cooks and food enthusiasts.

## Features

- **Recipe Data Retrieval**: Fetches recipe data from the Spoonacular API, ensuring a diverse selection of recipes.
- **User-Friendly Search**: Allows users to search for recipes by keywords, ingredients, cuisine, and dietary preferences.
- **Detailed Recipe Information**: Provides detailed information for each recipe, including ingredients, instructions, and nutritional facts.
- **Save and Organize**: Users can save their favorite recipes, create collections, and organize their cooking inspiration.

## Technologies Used

### Recipe API

The project utilizes the Spoonacular API to collect recipe data, providing a wide range of cooking ideas.

- [Spoonacular API](https://spoonacular.com/food-api)

### Frontend Framework

The frontend of the application is built using a modern JavaScript framework, making it highly interactive and user-friendly.

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)

### Backend

The backend of the application handles data processing, database management, and user authentication.

- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT Authentication](https://jwt.io/)

## Setup

### Prerequisites

1. Python 3.x
2. Pip (Python Package Manager)
3. MongoDB (for database storage)

### Installation

1. Clone the repository.

    ```bash
    git clone git@github.com:yourusername/recipe-data-analysis.git
    ```

2. Navigate into the directory.

    ```bash
    cd recipe-data-analysis
    ```

3. Install the required packages for both the frontend and backend.

    ```bash
    # Frontend
    cd frontend
    npm install

    # Backend
    cd ../backend
    pip install -r requirements.txt
    ```

### API Keys

1. You'll need an API key from Spoonacular.

2. Create a file named `.env` in the `backend` directory.

3. Store your API keys and other environment variables in the `.env` file. For example:

    ```
    SPOONACULAR_API_KEY=YOUR_API_KEY
    MONGODB_URI=YOUR_MONGODB_URI
    JWT_SECRET=YOUR_SECRET_KEY
    ```

4. Make sure to add `.env` to your `.gitignore` file to keep your secrets safe.

## Usage

To start the application:

1. Start the backend server.

    ```bash
    cd backend
    python app.py
    ```

2. Start the frontend development server.

    ```bash
    cd frontend
    npm start
    ```

3. Open your web browser and navigate to `http://localhost:3000` to access the Recipe Data Analysis application.

## Contributors

- [James Corfe](https://github.com/jdc338)

Feel free to contribute and make this project even more amazing!

**Happy cooking and enjoy the recipes!**
