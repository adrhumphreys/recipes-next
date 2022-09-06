import React from "react";
import type { FC } from "react";
import { Ingredient } from "../../lib/recipes";
import Link from "next/link";

const Ingredient: FC<Ingredient> = ({ ingredient, context, link }) => {
  if (link) {
    return (
      <div>
        <p>
          <Link href={`/${link}`}>{ingredient}</Link> <span>{context}</span>
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>
        {ingredient} <span>{context}</span>
      </p>
    </div>
  );
};

export default Ingredient;
