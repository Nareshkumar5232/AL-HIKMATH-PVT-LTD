import { create } from 'zustand';

interface CategoryStore {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));