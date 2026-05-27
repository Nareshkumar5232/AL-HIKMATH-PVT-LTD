"use client";

import create from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token?: string | null;
  isAuthenticated: boolean;
  login: (user: User, token?: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login(user, token) {
        set({ user, token: token ?? null, isAuthenticated: true });
      },
      logout() {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "al-hikmath-auth",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
import { create } from 'zustand';
import type { User } from '@/types';

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
  isAuthenticated: () => !!get().user,
}));
