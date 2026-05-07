"use client";

import { useEffect } from "react";
import { seedFirestoreIfEmpty } from "@/lib/seedData";

export default function SeedDataInitializer() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      return;
    }

    seedFirestoreIfEmpty().catch(() => {
      // Firebase rules may block writes until the project is configured.
    });
  }, []);

  return null;
}
