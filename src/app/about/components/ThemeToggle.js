'use client'
import { toggleTheme } from "@/lib/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";

const ThemeToggle = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(toggleTheme())}>
        Update theme color
      </button>
    </div>
  );
};

export default ThemeToggle;
