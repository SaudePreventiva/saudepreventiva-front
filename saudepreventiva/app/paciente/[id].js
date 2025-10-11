import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { loadPatients } from "../../utils/storage";
import { useTheme } from "../../context/ThemeContext";

export default function DetalheScreen() {
  const { id } = useLocalSearchParams();
  const [patient, setPatient] = useState(null);
  const { dark } = useTheme();

  useEffect(() => {
    const load = async () => {
      const pts = await loadPatients();
      if (!pts || pts.length === 0) return;

      // 🔍 busca o paciente comparando como string
      const found = pts.find((p) => String(p.id) === String(id));

      if (found) setPatient(found);
      else console.warn("Paciente não encontrado com id:", id);
    };
    load();
  }, [id]);

  if (!patient) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: dark ? "#121212" : "#f5f5f5" },
        ]}
      >
        <Text style={{ color: dark ? "#fff" : "#000" }}>Carregando...</Text>
      </View>
    );
  }

  // 👇 Define ícone conforme gênero
  const genderIcon =
    patient.gender === "feminino"
      ? require("../../assets/female.png") // 🧍‍♀️ ícone feminino
      : require("../../assets/male.png"); // 🧍‍♂️ ícone masculino

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? "#121212" : "#f5f5f5" },
      ]}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: dark ? "#1e1e1e" : "#fff" },
        ]}
      >
        {/* Ícone de gênero */}
        <View style={styles.iconContainer}>
          <Image source={genderIcon} style={styles.genderIcon} />
        </View>

        <Text style={[styles.name, { color: dark ? "#fff" : "#000" }]}>
          {patient.name}
        </Text>

        <Text style={[styles.info, { color: dark ? "#ccc" : "#333" }]}>
          Idade: {patient.age}
        </Text>

        <Text style={[styles.info, { color: dark ? "#ccc" : "#333" }]}>
          Gênero:{" "}
          {patient.gender === "feminino" ? "Feminino" : "Masculino"}
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
  card: {
    padding: 20,
    borderRadius: 12,
    width: "90%",
    elevation: 3,
    alignItems: "center",
  },
  name: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 6 },
  iconContainer: {
    marginBottom: 15,
    borderRadius: 100,
    padding: 8,
    backgroundColor: "#42DCDE20",
  },
  genderIcon: { width: 64, height: 64, resizeMode: "contain" },
});
