import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { loadPatients } from "../../src/storage";
import { MOCK_PATIENTS } from "../../src/mock";

export default function PatientDetail() {
  const { id } = useLocalSearchParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    (async () => {
      const pts = (await loadPatients()) ?? MOCK_PATIENTS;
      const p = pts.find(x => x.id === id);
      setPatient(p || null);
    })();
  }, [id]);

  if (!patient) return <View style={{ padding: 16 }}><Text>Paciente não encontrado.</Text></View>;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20 }}>{patient.name}</Text>
      <Text>Idade: {patient.age}</Text>
      <Text>UBS: {patient.ub}</Text>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "bold" }}>Últimos exames</Text>
        <Text>Glicemia: {patient.lastExam?.glicemia ?? "-"}</Text>
        <Text>Pressão: {patient.lastExam?.pressao ?? "-"}</Text>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: "bold" }}>Alertas</Text>
        {patient.alerts?.length ? patient.alerts.map((a, i) => <Text key={i}>- {a}</Text>) : <Text>- Nenhum</Text>}
      </View>
    </View>
  );
}
