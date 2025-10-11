import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { loadPatients } from "../../utils/storage";
import { useTheme } from "../../context/ThemeContext";

export default function DetalheScreen() {
  const { id } = useLocalSearchParams();
  const [patient, setPatient] = useState(null);
  const { dark } = useTheme();

  useEffect(() => {
    const load = async () => {
      const pts = await loadPatients();
      const found = pts[id];
      setPatient(found);
    };
    load();
  }, [id]);

  if (!patient) {
    return (
      <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
        <Text style={{ color: dark ? "#fff" : "#000" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      <View
        style={{
          backgroundColor: dark ? "#1e1e1e" : "#fff",
          padding: 20,
          borderRadius: 12,
          width: "90%",
          elevation: 3,
        }}
      >
        <Text style={[styles.name, { color: dark ? "#fff" : "#000" }]}>{patient.name}</Text>
        <Text style={[styles.info, { color: dark ? "#ccc" : "#333" }]}>
          Idade: {patient.age}
        </Text>
        <Text style={[styles.info, { color: dark ? "#ccc" : "#333" }]}>
          Condição: {patient.condition || "Não informada"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  name: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 6 },
});
