import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { loadPatients } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function PacientesScreen({ navigation }) {
  const [patients, setPatients] = useState([]);
  const { dark } = useTheme();

  useEffect(() => {
    const unsub = navigation.addListener("focus", async () => {
      const pts = await loadPatients();
      setPatients(pts);
    });
    return unsub;
  }, [navigation]);

  const accent = "#3b82f6";

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: dark ? "#1e1e1e" : "#fff", borderColor: dark ? "#333" : "#ddd" },
      ]}
      onPress={() => navigation.navigate("Detalhe", { patient: item })}
    >
      <Text style={[styles.name, { color: dark ? "#fff" : "#000" }]}>{item.name}</Text>
      <Text style={[styles.info, { color: dark ? "#aaa" : "#555" }]}>Idade: {item.age}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      <FlatList
        data={patients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ color: dark ? "#aaa" : "#555", textAlign: "center", marginTop: 20 }}>
            Nenhum paciente cadastrado.
          </Text>
        }
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: accent }]}
        onPress={() => navigation.navigate("NovoPaciente")}
      >
        <Text style={styles.buttonText}>➕ Adicionar Paciente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  info: { fontSize: 14, marginTop: 4 },
  button: {
    marginTop: 16,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
