// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  // carregar preferência salva
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const saved = await AsyncStorage.getItem("theme");
        if (saved !== null) {
          setDark(saved === "dark");
        }
      } catch (e) {
        console.log("Erro ao carregar tema:", e);
      }
    };
    loadTheme();
  }, []);

  // salvar quando mudar
  useEffect(() => {
    AsyncStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
