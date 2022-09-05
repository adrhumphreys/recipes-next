import React from "react";
import type { FC, ReactNode } from "react";

type Props = { children?: ReactNode; tags: string[] };

const Page: FC<Props> = ({ children, tags }) => {
  return (
    <div>
      {tags.map((t, pos) => (
        <p key={pos}>{t}</p>
      ))}
      {children}
    </div>
  );
};

export default Page;
