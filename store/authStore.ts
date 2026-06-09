"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiClient } from "@/services/api";
import type { User } from "@/types";

interface AuthStore {
  user: User | null;
  token?: string | null;
  isAuthenticated: boolean;
  login: (user: User, token?: string) => void;
  loginWithCredentials: (email: string, password: string) => Promise<boolean>;
  registerWithCredentials: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login(user, token) {
        set({ user, token: token ?? null, isAuthenticated: true });
      },
          async loginWithCredentials(email: string, password: string) {
            try {
              const res = await apiClient.post("/auth/login", { email, password });
              const { user, token } = res.data;
              set({ user, token, isAuthenticated: true });
              return true;
            } catch (err) {
              return false;
            }
          },
          async registerWithCredentials(name: string, email: string, password: string) {
            try {
              const res = await apiClient.post("/auth/register", { name, email, password });
              const { user, token } = res.data;
              set({ user, token, isAuthenticated: true });
              return true;
            } catch (err) {
              return false;
            }
          },
      logout() {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "al-hikmath-auth",
    }
  )
);

export default useAuthStore;
