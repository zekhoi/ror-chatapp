import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import { useAuth } from "@/hooks";
import Link from "next/link";
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
        <Logo />
        {isAuthenticated ? (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link
            className="px-4 py-2.5 text-sm rounded text-center text-white font-bold bg-primary-500 hover:bg-primary-600 active:bg-primary-700"
            href="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
