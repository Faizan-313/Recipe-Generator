import axios from "axios";

export default async function fetchRecipe(ingredients){
    try{
        const response = await axios.post("https://recipe-generator-mu-eight.vercel.app/get-recipe", { ingredients: ingredients }, {
            headers: {
            "Content-Type": "application/json",
            },
        });
        return response.data.recipe;

    }catch(err){
        console.log(err);
        return "An error occured, check console"
    }
}

