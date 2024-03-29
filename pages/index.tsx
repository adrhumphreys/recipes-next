import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Page from "../components/layout/Page";
import { getAllSlugs, getAllRecipes } from "../lib/recipes";

interface Props {
  recipes: {
    slug: string;
    title: string;
  }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipes = getAllRecipes().map(({ slug, title }) => {
    return {
      slug,
      title,
    };
  });

  return {
    props: {
      recipes,
    },
  };
};

const Home: NextPage<Props> = ({ recipes }) => {
  return (
    <Page tags={[]}>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Recipes made by Kelly & Adrian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        async
        defer
      ></Script>

      <div className="space-y-4">
        <div>
          <h1 className="mb-2 text-3xl font-bold underline">Recipes</h1>
          <ul>
            {recipes.map(({ slug, title }) => (
              <li key={slug}>
                <Link href={`/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg font-bold">Utils</p>
          <ul>
            <li>
              <Link href="/utils/flour">
                <a>Self raising flour calculator</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default Home;
