import DefaultLayout from "@/components/templates/PrivateLayout";
import React from "react";

export default function Page500() {
  return (
    <DefaultLayout title="500 - Internal Server Error">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h1 className="text-6xl font-bold text-primary-500">500</h1>
          <h2 className="text-2xl font-bold text-gray-700">
            Internal Server Error
          </h2>

          <p className="text-center text-gray-500">
            Something went wrong. Please try again later.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}
