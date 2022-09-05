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
      {ingredients &&
        ingredients.map((ingredient, pos) => (
          <Ingredient {...ingredient} key={pos} />
        ))}
    </div>
  );
};

export default IngredientGroup;
