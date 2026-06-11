import { apiClient } from "./api";

export interface StoreSettings {
  storeName?: string;
  storeAddress?: string;
  storePhone1?: string;
  storePhone2?: string;
  gstin?: string;
  email?: string;
  website?: string;
  shippingFee?: number;
}

export const settingsService = {
  async getSettings(): Promise<StoreSettings | null> {
    try {
      // First try /settings endpoint
      const response = await apiClient.get<StoreSettings>("/settings");
      return response.data;
    } catch (error) {
      console.warn("Failed to get settings from /settings, trying /admin/settings...", error);
      try {
        const response = await apiClient.get<StoreSettings>("/admin/settings");
        return response.data;
      } catch (adminError) {
        console.error("Failed to get settings from /admin/settings as well:", adminError);
        return null;
      }
    }
  }
};
