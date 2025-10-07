import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { loadPatients } from "../utils/storage";

export default function PacientesScreen({ navigation }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const unsub = navigation.addListener("focus", async () => {
      const pts = await loadPatients();
      setPatients(pts);
    });
    return unsub;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Pacientes</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={`${item.name} (${item.ub})`}
            onPress={() => navigation.navigate("Detalhe", { id: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
});
