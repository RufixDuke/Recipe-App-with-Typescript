import React, { useState, useEffect, FormEvent } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { iRecipe } from "./iRecipe";

function App() {
    const [recipesFound, setRecipesFound] = useState<iRecipe[]>([]);
    const [recipeSearch, setRecipeSearch] = useState("");

    const searchForRecipes = async (query: string): Promise<iRecipe[]> => {
        const result = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        return (await result.json()).results;
    };

    const search = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.querySelector("#searchText") as HTMLInputElement;
        setRecipeSearch(input.value);
        console.log(setRecipeSearch(input.value));
    };

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(recipeSearch);
            if (query) {
                const response = await searchForRecipes(query);
                setRecipesFound(response);
            }
        })();
    }, [recipeSearch]);

    return (
        <div className="App">
            <h2>Recipe App</h2>
            <form className="searchForm" onSubmit={(e) => search(e)}>
                <input
                    type="text"
                    id="searchText"
                    placeholder="Enter your recipe....."
                    // onChange={(e) => setRecipeSearch(e)}
                />
                <button type="submit">Search</button>
            </form>
            {recipeSearch && <p>Results for {recipeSearch}...</p>}

            <div>
                {recipesFound &&
                    recipesFound.map((recipe) => (
                        <Recipe key={recipe.idMeal} recipe={recipe} />
                    ))}
            </div>
        </div>
    );
}

export default App;
