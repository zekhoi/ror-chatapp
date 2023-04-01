import Head from "next/head";
import React from "react";

type DefaultLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function DefaultLayout({ title, children }: DefaultLayoutProps) {
  const fullTitle = `ChatHub - ${title}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <main className="flex flex-col w-full h-screen min-h-screen bg-grayed">
        {/* <main className="flex-1 max-w-screen-sm bg-grayed"> */}
        {children}
        {/* </main> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
