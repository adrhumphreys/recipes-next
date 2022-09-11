import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";

type Props = { children?: ReactNode; tags: string[] };

const Page: FC<Props> = ({ children, tags }) => {
  return (
    <div className="h-full border-b-8 border-b-charcoal">
      <div className="border-b-2 border-b-charcoal">
        <div className="mx-auto flex max-w-6xl justify-between py-4 px-8">
          <Link href="/">
            <a className="font-bold">All recipes</a>
          </Link>
          <div>
            <p>{"<3"}</p>
          </div>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-8 py-12">{children}</main>
    </div>
  );
};

export default Page;
