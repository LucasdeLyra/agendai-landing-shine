import { createContext, useContext, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import type { ProfessionalPublicInfo, ProfessionalProfile } from "@/lib/scheduling";
import { authenticateProfessional, listProfessionalPublicInfo } from "@/lib/scheduling";

export type AuthContextValue = {
  professional: ProfessionalProfile | null;
  isAuthenticating: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  professionals: ProfessionalPublicInfo[];
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [professional, setProfessional] = useState<ProfessionalProfile | null>(null);
  const [isAuthenticating, setAuthenticating] = useState(false);

  const professionals = useMemo(() => listProfessionalPublicInfo(), []);

  const login = (email: string, password: string) => {
    setAuthenticating(true);
    const result = authenticateProfessional(email, password);
    setAuthenticating(false);

    if (!result) {
      return { success: false, error: "Credenciais inválidas" };
    }

    setProfessional(result);
    return { success: true };
  };

  const logout = () => {
    setProfessional(null);
  };

  const value: AuthContextValue = {
    professional,
    isAuthenticating,
    login,
    logout,
    professionals,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
