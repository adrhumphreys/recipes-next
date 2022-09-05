import React from "react";
import type { FC } from "react";
import { Step } from "../../lib/recipes";

const Step: FC<Step> = ({ title, step }) => {
  return (
    <div className="">
      {title && <h2>{title}</h2>}
      <p>{step}</p>
    </div>
  );
};

export default Step;
