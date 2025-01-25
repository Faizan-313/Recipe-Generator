# Chef Claude:
Recipe Suggestion App
Chef Claude is a recipe suggestion app that helps users find new recipe ideas based on the ingredients they have on hand. By simply providing a list of ingredients, Chef Claude uses AI to suggest personalized recipes, reducing food waste and making meal planning easier.

## Features:
- **Ingredient-Based Recipe Suggestions**: Users can input ingredients, and Chef Claude will suggest recipes based on them.
- **Real-Time Recipe Generation**: Uses Hugging Face AI to generate recipe suggestions in real-time.
- **Intuitive Interface**: Simple, easy-to-use UI to add ingredients and display suggested recipes.
- **Customizable Recipe Output**: Recipes are formatted in markdown, allowing easy integration into web pages.
- **Cross-Origin Support**: CORS support for smooth frontend-backend communication during development.

## Tech Stack:
- **Frontend**: React.js
- **Backend**: Express.js, Axios
- **AI Integration**: Hugging Face Inference API (for recipe generation)

## Setup Instructions:

### 1. Clone the Repository:
```bash
git clone "link"
cd chef-claude

cd frontend
npm install

cd ../backend
npm install

Create a .env file add your Hugging Face API key:
HF_ACCESS_TOKEN=your_huggingface_access_token
```
### for frontend
npm run dev

### for backend
node server.js


# Contributing:
Feel free to submit issues and pull requests. Contributions to improve the functionality or suggest features are welcome!

# License:
This project is licensed under the MIT License - see the LICENSE file for details.

Built with ❤️ by Peer Faizan


