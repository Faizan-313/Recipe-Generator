import React from "react";
import Recipe from "./claudeRecipe";
import IngredientsList from "./ingredientList";
import fetchRecipe from "../../../ai.js";

export default function Main(){
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient").trim();
        if(!newIngredient || (ingredients.filter((i)=> newIngredient === i)).length > 0) return;
        setIngredients(prev => [...prev, newIngredient]);
    }

    async function getRecipe(){
        const result = await fetchRecipe(ingredients);
        setRecipe(result);
    }
    
    return (
        <>
            <main>
                <form action={addIngredient} className="add-ingredient-form">
                    <input type="text" placeholder="e.g. chicken" aria-label="add ingredient" name="ingredient"/>
                    <button type="submit">Add ingredient</button>
                </form>
                {ingredients.length > 0 && 
                    <IngredientsList 
                        ingredients = {ingredients} 
                        getRecipe = {getRecipe}
                    />}
                {recipe && <Recipe recipe={recipe}/>}
            </main>
        </>
    )
}