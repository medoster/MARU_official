"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LanguageSetter() {
  const pathname = usePathname();
  useEffect(() => {
    const lang = pathname.startsWith("/en") ? "en" : "ja";
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [pathname]);
  return null;
}
