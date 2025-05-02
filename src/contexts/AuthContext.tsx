import { AdminUser } from "@/types/userTypes";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  adminUser: AdminUser | null;
  token: string | null;
  setAdminUser: (adminUser: AdminUser | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const sharedToken = localStorage.getItem("token");
    const sharedUser = localStorage.getItem("admin_user");

    if (sharedToken && sharedUser) {
      setToken(sharedToken);
      try {
        setAdminUser(JSON.parse(sharedUser));
      } catch (e) {
        console.log("Failed to parse stored admin user", e);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin_user");
    setAdminUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ adminUser, token, setAdminUser, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx
};
