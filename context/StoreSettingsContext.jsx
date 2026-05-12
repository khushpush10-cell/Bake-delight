"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";
import toast from "react-hot-toast";

const StoreSettingsContext = createContext();

export const useStoreSettings = () => {
  const context = useContext(StoreSettingsContext);
  if (!context) {
    throw new Error("useStoreSettings must be used within StoreSettingsProvider");
  }
  return context;
};

const defaultSettings = {
  // Contact & WhatsApp
  whatsappNumber: "923001234567",
  
  // Social Media Links
  instagram: { url: "", show: false },
  facebook: { url: "", show: false },
  tiktok: { url: "", show: false },
  twitter: { url: "", show: false },
  
  // Store Info
  storeName: "Bake Delight",
  storeTagline: "Homemade with Love",
  footerDescription: "Fresh home-baked cakes, cookies, pastries and custom treats made with love.",
  deliveryInfoText: "Free Delivery on orders above Rs. 3,000  ·  Order 24hrs in Advance  ·  Freshly Baked Daily  ·  ",
  
  // Store Hours / Availability
  storeOpen: true,
  closedMessage: "We are currently closed. Please check back soon!"
};

export function StoreSettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchSettings = async () => {
      if (!isFirebaseConfigured()) {
        setLoading(false);
        return;
      }

      try {
        const db = getFirebaseDb();
        const settingsDoc = await getDoc(doc(db, "settings", "store"));
        
        if (settingsDoc.exists()) {
          const data = settingsDoc.data();
          // Merge with defaults to ensure all fields exist
          setSettings({ ...defaultSettings, ...data });
        } else {
          // Create default settings document if it doesn't exist
          await setDoc(doc(db, "settings", "store"), defaultSettings);
        }
      } catch (error) {
        console.error("Error fetching store settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updateSettings = async (newSettings) => {
    if (!isFirebaseConfigured()) {
      toast.error("Firebase not configured");
      return false;
    }

    try {
      console.log('Attempting to save settings:', newSettings);
      const db = getFirebaseDb();
      await setDoc(doc(db, "settings", "store"), newSettings);
      console.log('Settings saved successfully');
      setSettings(newSettings);
      toast.success("Settings saved successfully!");
      return true;
    } catch (error) {
      console.error("Firebase error saving settings:", error);
      console.error("Error details:", error.code, error.message);
      toast.error(`Failed to save settings: ${error.message}`);
      return false;
    }
  };

  const value = {
    settings,
    updateSettings,
    loading
  };

  // Return children with default settings during SSR
  if (!mounted) {
    return (
      <StoreSettingsContext.Provider value={{ settings: defaultSettings, updateSettings, loading: true }}>
        {children}
      </StoreSettingsContext.Provider>
    );
  }

  return (
    <StoreSettingsContext.Provider value={value}>
      {children}
    </StoreSettingsContext.Provider>
  );
}
