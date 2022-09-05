import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Page from "../components/layout/Page";
import Recipe from "../components/recipe";
import { getAllSlugs, getBySlug, RecipeData } from "../lib/recipes";
import { getTags } from "../lib/tags";

interface Props {
  recipe: RecipeData;
  tags: string[];
}

interface Params extends ParsedUrlQuery {
  recipe: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = getAllSlugs().map((s) => ({ params: { recipe: s } }));

  return {
    paths: recipes,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const slug = context?.params?.recipe!;

  const data = await getBySlug(slug);

  const tags = getTags();

  return {
    props: {
      recipe: data,
      tags,
    },
  };
};

const RecipePage: NextPage<Props> = ({ recipe, tags }) => {
  return (
    <Page tags={tags}>
      <Recipe recipe={recipe} />
    </Page>
  );
};

export default RecipePage;
