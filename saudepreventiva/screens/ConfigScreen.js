// screens/ConfigScreen.js
import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ConfigScreen() {
  const { dark, setDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      <Text style={[styles.title, { color: dark ? "#fff" : "#000" }]}>Configurações</Text>

      <View style={styles.row}>
        <Text style={[styles.label, { color: dark ? "#fff" : "#000" }]}>
          🌙 Dark Mode
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#3b82f6" }}
          thumbColor={dark ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setDark(!dark)}
          value={dark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
  },
});
