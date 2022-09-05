import React from "react";
import type { FC } from "react";
import { RecipeData } from "../../lib/recipes";
import Ingredient from "./Ingredient";
import IngredientGroup from "./IngredientGroup";
import Step from "./Step";

const Recipe: FC<{ recipe: RecipeData }> = ({ recipe }) => {
  const { title, servings, tags, ingredientGroups, ingredients, steps } =
    recipe;

  return (
    <div>
      <h1 className="text-4xl font-heading font-bold text-center block">
        {title}
      </h1>
      <p className="block text-lightgray text-center font-medium">
        {tags &&
          tags.map((tag) => (
            <span key={tag}>
              {tag} {"//"}{" "}
            </span>
          ))}
        <strong>{servings} servings</strong>
      </p>
      {ingredients &&
        ingredients.map((ingredient, pos) => (
          <Ingredient {...ingredient} key={pos} />
        ))}
      {ingredientGroups &&
        ingredientGroups.map((ingredientGroup, pos) => (
          <IngredientGroup {...ingredientGroup} key={pos} />
        ))}

      <div>
        {steps.map((s, pos) => (
          <Step {...s} key={pos} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
