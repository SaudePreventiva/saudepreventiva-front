import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { loadPatients } from "../utils/storage";

export default function DetalheScreen({ route }) {
  const { id } = route.params;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    (async () => {
      const pts = await loadPatients();
      setPatient(pts.find((p) => p.id === id));
    })();
  }, [id]);

  if (!patient) {
    return (
      <View style={styles.container}>
        <Text>Paciente não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{patient.name}</Text>
      <Text>Idade: {patient.age}</Text>
      <Text>UB: {patient.ub}</Text>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "bold" }}>Últimos exames</Text>
        <Text>Glicemia: {patient.lastExam?.glicemia ?? "-"}</Text>
        <Text>Pressão: {patient.lastExam?.pressao ?? "-"}</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "bold" }}>Alertas</Text>
        {patient.alerts?.length ? (
          patient.alerts.map((a, i) => <Text key={i}>- {a}</Text>)
        ) : (
          <Text>- Nenhum</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
});
