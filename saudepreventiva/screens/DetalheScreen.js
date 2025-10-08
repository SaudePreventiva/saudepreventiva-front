import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function DetalheScreen({ route }) {
  const { patient } = route.params;
  const { dark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      <View style={[styles.card, { backgroundColor: dark ? "#1e1e1e" : "#fff" }]}>
        <Text style={[styles.name, { color: dark ? "#fff" : "#000" }]}>{patient.name}</Text>
        <Text style={[styles.info, { color: dark ? "#ccc" : "#555" }]}>Idade: {patient.age}</Text>
        <Text style={[styles.info, { color: dark ? "#ccc" : "#555" }]}>
          Condição: {patient.condition || "Não informada"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 20, borderRadius: 12, elevation: 3 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  info: { fontSize: 16, marginBottom: 4 },
});
