import { getAllRecipes } from "./recipes";

let MENU_TAGS: string[] | undefined = undefined;

export const getTags = (): string[] => {
  if (MENU_TAGS !== undefined) {
    return MENU_TAGS;
  }

  console.error("missing menu items");

  const recipes = getAllRecipes();
  const tags = recipes.reduce((prev, curr) => {
    curr.tags?.forEach((t) => {
      prev.add(t);
    });

    return prev;
  }, new Set<string>());

  MENU_TAGS = Array.from(tags);

  return MENU_TAGS;
};
