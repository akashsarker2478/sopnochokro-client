"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // সার্ভার আর ক্লায়েন্ট সাইড ম্যাচ করানোর জন্য এটি দরকার
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration error এড়াতে মাউন্ট হওয়ার আগে খালি ডিভ রিটার্ন করবে
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-9 h-9 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}