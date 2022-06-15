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
        </div>
    );
};

export default Recipe;
