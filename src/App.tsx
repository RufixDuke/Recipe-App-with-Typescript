import React, { useState } from "react";
import "./App.css";

function App() {
    const [recipesFound, setRecipesFound] = useState([]);
    const [recipeSearch, setRecipeSearch] = useState("");

    const searchForRecipes = async (query: string): Promise<any> => {
        const result = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        return (await result.json()).result;
    };
    return (
        <div className="App">
            <h2>....</h2>
        </div>
    );
}

export default App;
