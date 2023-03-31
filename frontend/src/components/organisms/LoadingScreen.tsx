import Head from "next/head";
import React from "react";

export default function LoadingScreen() {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="items-center justify-center w-full min-h-screen px-4">
        <div className="loading">
          <h1 className="py-4 text-4xl font-bold text-center text-primary-500">
            Loading...
          </h1>
          <div className="space-y-2 balls">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </div>
      </div>
    </>
  );
}
