import React from "react";
import type { FC } from "react";
import { IngredientGroup } from "../../lib/recipes";
import Ingredient from "./Ingredient";

const IngredientGroup: FC<IngredientGroup> = ({
  groupTitle,
  groupContext,
  ingredients,
}) => {
  return (
    <div className="ingredientGroup">
      <p className="ingredientGroupTitle">
        {groupTitle} {groupContext && <span>{groupContext}</span>}
      </p>
      <ul>
        {ingredients &&
          ingredients.map((ingredient, pos) => (
            <li key={pos}>
              <Ingredient {...ingredient} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default IngredientGroup;
