import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { loadPatients } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function DetalheScreen({ route }) {
  const { id } = route.params;
  const [patient, setPatient] = useState(null);
  const { dark } = useTheme();

  useEffect(() => {
    (async () => {
      const pts = await loadPatients();
      setPatient(pts.find((p) => p.id === id));
    })();
  }, [id]);

  if (!patient) {
    return (
      <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#fff" }]}>
        <Text style={{ color: dark ? "#fff" : "#000" }}>Paciente não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#fff" }]}>
      <Text style={[styles.subtitle, { color: dark ? "#fff" : "#000" }]}>{patient.name}</Text>
      <Text style={{ color: dark ? "#fff" : "#000" }}>Idade: {patient.age}</Text>
      <Text style={{ color: dark ? "#fff" : "#000" }}>UB: {patient.ub}</Text>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "bold", color: dark ? "#fff" : "#000" }}>Últimos exames</Text>
        <Text style={{ color: dark ? "#fff" : "#000" }}>Glicemia: {patient.lastExam?.glicemia ?? "-"}</Text>
        <Text style={{ color: dark ? "#fff" : "#000" }}>Pressão: {patient.lastExam?.pressao ?? "-"}</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "bold", color: dark ? "#fff" : "#000" }}>Alertas</Text>
        {patient.alerts?.length ? (
          patient.alerts.map((a, i) => (
            <Text key={i} style={{ color: dark ? "#fff" : "#000" }}>- {a}</Text>
          ))
        ) : (
          <Text style={{ color: dark ? "#fff" : "#000" }}>- Nenhum</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
});
