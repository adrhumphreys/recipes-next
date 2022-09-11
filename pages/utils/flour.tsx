import type { NextPage } from "next";
import FlourCalculator from "../../components/FlourCalculator";
import Page from "../../components/layout/Page";

const Flour: NextPage = () => {
  return (
    <Page tags={[]}>
      <FlourCalculator />
    </Page>
  );
};

export default Flour;
