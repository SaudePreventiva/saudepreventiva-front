import { Stack } from "expo-router";
import { ThemeProvider } from "../context/ThemeContext";
import { Image } from "react-native";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#42DCDE" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => (
            ""
          ),
        }}
      />
    </ThemeProvider>
  );
}
