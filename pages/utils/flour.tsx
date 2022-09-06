import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const Home: NextPage = () => {
  const [flour, setFlour] = useState<string | undefined>();
  const flourNumber = parseFloat(flour ?? "0");
  const plainFlour = (parseInt(flour ?? "0") * 0.95).toFixed(2);
  const bakingSoda = (parseInt(flour ?? "0") * 0.05).toFixed(2);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Sel raising flour calculator
      </h1>
      <label for="flour">Recipe calls for:</label>

      <div className="flex space-x-2">
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            name="flour"
            id="flour"
            value={flour}
            onChange={(e) => setFlour(e.target.value)}
            className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
            g
          </span>
        </div>
        <span>of self raising flour</span>
      </div>
      <div>
        <p>Use {plainFlour}g of flour</p>
        <p>Use {bakingSoda}g of baking soda</p>
      </div>
    </main>
  );
};

export default Home;
