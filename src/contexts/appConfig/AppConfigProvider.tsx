// @ts-nocheck

import { AppConfig } from "@/constants/";
import { createContext, useContext, useEffect, useState } from "react";

const ConfigContext = createContext({});

export const AppConfigProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("vite-ui-theme");
    return saved || AppConfig.fallbacks.defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("vite-ui-theme", theme);
  }, [theme]);

  const value = {
    ...AppConfig.constants,
    // Dynamic config
    theme,
    setTheme,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export const useAppConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within ConfigProvider");
  }
  return context;
};
