import LoginForm from "@/components/organisms/LoginForm";
import PublicLayout from "@/components/templates/PublicLayout";

export default function Home() {
  return (
    <PublicLayout title="Home">
      <div className="flex items-center justify-center w-full min-h-screen">
        <LoginForm />
      </div>
    </PublicLayout>
  );
}
