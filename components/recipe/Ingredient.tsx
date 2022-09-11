import React from "react";
import type { FC } from "react";
import { Ingredient } from "../../lib/recipes";
import Link from "next/link";

const Ingredient: FC<Ingredient> = ({ ingredient, context, link }) => {
  if (link) {
    return (
      <p className="leadin-8 text-xl">
        <Link href={`/${link}`}>
          <a className="font-medium underline">{ingredient}</a>
        </Link>{" "}
        <span className="block text-lg text-gray-500">{context}</span>
      </p>
    );
  }

  return (
    <p className="text-xl leading-8">
      <span className="font-medium">{ingredient} </span>
      <span className="block text-lg text-gray-500">{context}</span>
    </p>
  );
};

export default Ingredient;
