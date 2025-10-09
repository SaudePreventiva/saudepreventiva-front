import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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

  const accent = "#3b82f6";

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={[styles.title, { color: dark ? "#fff" : "#000" }]}>SaúdePreventiva</Text>
      <Text style={[styles.subtitle, { color: dark ? "#ccc" : "#555" }]}>
        Pacientes cadastrados: {count}
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: accent }]}
        onPress={() => navigation.navigate("Pacientes")}
      >
        <Text style={styles.buttonText}>📋 Ver Pacientes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: accent }]}
        onPress={() => navigation.navigate("NovoPaciente")}
      >
        <Text style={styles.buttonText}>➕ Novo Paciente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: dark ? "#333" : "#ddd" }]}
        onPress={() => navigation.navigate("Config")}
      >
        <Text style={[styles.buttonText, { color: dark ? "#fff" : "#000" }]}>
          ⚙️ Configurações
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  logo: { width: 250, height: 250, marginBottom: 16 }, // tamanho do ícone
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 12 },
  subtitle: { fontSize: 16, marginBottom: 24 },
  button: { width: "80%", padding: 14, borderRadius: 12, alignItems: "center", marginVertical: 6 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
