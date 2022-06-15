import React from "react";
import { iRecipe } from "../iRecipe";

const Recipe = (props: { recipe: iRecipe }) => {
    const { recipe } = props;

    return (
        <div className="recipe">
            <div className="title">
                <img
                    src={recipe.strMealThumb || "../../public/logo192.png"}
                    alt={recipe.strMeal}
                />
            </div>
            <p>
                {recipe.strTags.split(",").map((rec) => (
                    <li>{rec}</li>
                ))}
            </p>
            <ul>
                <li>{recipe.strIngredient1}</li>
                <li>{recipe.strIngredient2}</li>
                <li>{recipe.strIngredient3}</li>
                <li>{recipe.strIngredient4}</li>
                <li>{recipe.strIngredient5}</li>
            </ul>
            <a href={recipe.strSource} target="_blank">
                View Recipe
            </a>
        </div>
    );
};

export default Recipe;
