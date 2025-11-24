"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "print-number";

export const usePrintNumber = () => {
  const [number, setNumber] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : 0;
    } catch (error) {
      console.error("Local storage error:", error);
      return 0;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(number));
    } catch (error) {
      console.error("Local storage error:", error);
    }
  }, [number]);

  return { number, setNumber };
};
