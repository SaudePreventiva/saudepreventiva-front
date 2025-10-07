import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ConfigScreen() {
  const { dark, toggleDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#fff" }]}>
      <Text style={[styles.subtitle, { color: dark ? "#fff" : "#000" }]}>Configurações</Text>
      <View style={{ flexDirection: "row", marginTop: 16, alignItems: "center" }}>
        <Text style={{ marginRight: 8, color: dark ? "#fff" : "#000" }}>Modo escuro</Text>
        <Switch value={dark} onValueChange={toggleDark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
});
