import { apiClient } from "./api";

export interface StoreSettings {
  storeName?: string;
  storeAddress?: string;
  phone1?: string;
  phone2?: string;
  gstin?: string;
  taxId?: string;
  email?: string;
  website?: string;
  shippingCost?: number;
  taxRate?: number;
  currency?: string;
}

export const settingsService = {
  async getSettings(): Promise<StoreSettings | null> {
    try {
      const response = await apiClient.get<StoreSettings>("/settings");
      return response.data;
    } catch (error) {
      console.warn("Failed to load store settings:", error);
      return null;
    }
  }
};
