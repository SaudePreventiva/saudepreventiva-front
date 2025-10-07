import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { loadPatients } from "../../src/storage";
import { MOCK_PATIENTS } from "../../src/mock";

export default function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    (async () => {
      const pts = await loadPatients();
      setPatients(pts ?? MOCK_PATIENTS);
    })();
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Pacientes</Text>

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginBottom: 12 }}>
            <Link href={`/patients/${item.id}`}>
              <Text style={{ fontSize: 16 }}>{item.name} — {item.ub}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />
      <View style={{ marginTop: 12 }}>
        <Link href="/patients/new"><Text style={{ color: "blue" }}>Adicionar paciente</Text></Link>
      </View>
    </View>
  );
}
