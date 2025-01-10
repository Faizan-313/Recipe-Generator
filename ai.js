//sending data to the backend and getting the recipe back 

import axios from "axios";

export default async function fetchRecipe(ingredients){
    try{
        const response = await axios.post("http://localhost:3000/get-recipe",{ingredients: ingredients},{
            headers: {
                "Content-Type" : "application/json",
            },
        });
        return response.data.recipe;

    }catch(err){
        console.log(err);
        return "An error occured, check console"
    }
}

