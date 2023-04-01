import LoadingScreen from "@/components/organisms/LoadingScreen";
import DefaultLayout from "@/components/templates/DefaultLayout";
import { useAuth } from "@/hooks";
import { useRouter } from "next/dist/client/router";
import React from "react";

type PublicLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Public({ title, children }: PublicLayoutProps) {
  const router = useRouter();

  const { isLoading, isAuthenticated, tag } = useAuth();

  if (isLoading) return <LoadingScreen />;
  if (isAuthenticated) {
    router.push(`/chat/${tag}`);
    return <LoadingScreen />;
  }

  return <DefaultLayout title={title}>{children}</DefaultLayout>;
}
