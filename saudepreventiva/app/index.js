import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { loadPatients } from "../src/storage";

export default function Home() {
  const router = useRouter();
  const [patientsCount, setPatientsCount] = useState(0);

  useEffect(() => {
    (async () => {
      const pts = await loadPatients();
      setPatientsCount(pts ? pts.length : 0);
    })();
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 8 }}>HealthGuard</Text>
      <Text>Pacientes cadastrados: {patientsCount}</Text>

      <View style={{ marginTop: 24 }}>
        <Button title="Ver Pacientes" onPress={() => router.push("/patients")} />
      </View>

      <View style={{ marginTop: 12 }}>
        <Link href="/patients/new">
          <Text style={{ color: "blue" }}>+ Novo Paciente</Text>
        </Link>
      </View>

      <View style={{ marginTop: 24 }}>
        <Link href="/settings"><Text style={{ color: "blue" }}>Configurações</Text></Link>
      </View>

      <View style={{ marginTop: 32 }}>
        <Text style={{ fontSize: 18 }}>Alertas recentes (mock)</Text>
        <View style={{ marginTop: 8 }}>
          <Text>- Risco de hipertensão em UBS Centro</Text>
          <Text>- Surtos locais: 3 casos de febre (área Norte)</Text>
        </View>
      </View>
    </ScrollView>
  );
}
