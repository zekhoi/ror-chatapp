import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [tag, setTag] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const login = (username: string, tag: string) => {
    localStorage.setItem("tag", tag);
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
    setUser(username);
    setTag(tag);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUser("");
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const username = localStorage.getItem("username");
      const tag = localStorage.getItem("tag");
      if (username && tag) {
        setIsAuthenticated(true);
        setUser(username);
        setTag(tag);
      }
    } catch (error) {
      setUser("");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    isAuthenticated,
    user,
    tag,
    isLoading,
    login,
    logout,
  };
}
