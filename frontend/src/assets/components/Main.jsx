import React from "react";
import Recipe from "./claudeRecipe";
import IngredientsList from "./ingredientList";
import fetchRecipe from "../../../ai.js";
import "./loader.css";

export default function Main(){
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);
    const [loading, setLoading] = React.useState(false);

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient").trim();
        if(!newIngredient || (ingredients.filter((i)=> newIngredient === i)).length > 0) return;
        setIngredients(prev => [...prev, newIngredient]);
    }
    React.useEffect(()=>{
        if(recipe.length > 0 && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }
    },[recipe])
    
    async function getRecipe(){
        setLoading(true);
        const result = await fetchRecipe(ingredients);
        setRecipe(result);
        setLoading(false);
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
                        ref = {recipeSection}
                    />
                }
                {loading && <div className="loading-container"><span className="loading-spinner"></span>Loading...</div>}
                {(recipe && !loading ) && <Recipe recipe={recipe}/>}
            </main>
        </>
    )
}