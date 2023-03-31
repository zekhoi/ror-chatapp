import Button from "@/components/atoms/Button";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <nav className="flex w-full py-2">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold">ChatApp</h1>
        {isAuthenticated && (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
