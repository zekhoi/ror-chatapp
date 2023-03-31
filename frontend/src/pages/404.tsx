import DefaultLayout from "@/components/templates/PrivateLayout";
import React from "react";

export default function Page404() {
  return (
    <DefaultLayout title="404 Not Found">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h1 className="text-6xl font-bold text-primary-500">404</h1>
          <h2 className="text-2xl font-bold text-gray-700">Page Not Found</h2>

          <p className="text-center text-gray-500">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}
