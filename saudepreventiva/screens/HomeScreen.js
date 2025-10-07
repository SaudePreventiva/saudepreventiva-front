import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { loadPatients } from "../utils/storage";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsub = navigation.addListener("focus", async () => {
      const pts = await loadPatients();
      setCount(pts.length);
    });
    return unsub;
  }, [navigation]);

  return (
    <View style={styles.center}>
      <Text style={styles.title}>HealthGuard</Text>
      <Text>Pacientes cadastrados: {count}</Text>

      <Button title="Ver Pacientes" onPress={() => navigation.navigate("Pacientes")} />
      <Button title="Novo Paciente" onPress={() => navigation.navigate("NovoPaciente")} />
      <Button title="Configurações" onPress={() => navigation.navigate("Config")} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
