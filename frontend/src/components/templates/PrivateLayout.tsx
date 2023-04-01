import LoadingScreen from "@/components/organisms/LoadingScreen";
import DefaultLayout from "@/components/templates/DefaultLayout";
import { useAuth } from "@/hooks";
import { useRouter } from "next/dist/client/router";
import React from "react";

type PrivateLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function PrivateLayout({ title, children }: PrivateLayoutProps) {
  const router = useRouter();

  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) return <LoadingScreen />;
  if (!isAuthenticated) {
    router.push("/login");
    return <LoadingScreen />;
  }

  return <DefaultLayout title={title}>{children}</DefaultLayout>;
}
