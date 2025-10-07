import React, { createContext, useContext, useEffect, useState } from "react";
import { loadPrefs, savePrefs } from "../utils/storage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    (async () => {
      const prefs = await loadPrefs();
      if (prefs?.darkMode) setDark(true);
    })();
  }, []);

  const toggleDark = async (val) => {
    setDark(val);
    await savePrefs({ darkMode: val });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
