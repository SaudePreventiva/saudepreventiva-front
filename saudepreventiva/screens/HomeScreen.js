import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { loadPatients } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const { dark } = useTheme();

  useEffect(() => {
    const unsub = navigation.addListener("focus", async () => {
      const pts = await loadPatients();
      setCount(pts.length);
    });
    return unsub;
  }, [navigation]);

  return (
    <View style={[styles.center, { backgroundColor: dark ? "#121212" : "#fff" }]}>
      <Text style={[styles.title, { color: dark ? "#fff" : "#000" }]}>SaudePreventiva</Text>
      <Text style={{ color: dark ? "#ddd" : "#000" }}>
        Pacientes cadastrados: {count}
      </Text>

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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
