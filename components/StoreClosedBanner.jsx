"use client";

import { useEffect, useState } from "react";
import { useStoreSettings } from "@/context/StoreSettingsContext";

export default function StoreClosedBanner() {
  const { settings } = useStoreSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || settings.storeOpen) {
    return null;
  }

  return (
    <div 
      className="w-full py-4 px-6 text-center font-semibold"
      style={{ backgroundColor: '#5C2D0A', color: '#FEF6EC' }}
    >
      {settings.closedMessage}
    </div>
  );
}
