import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { savePatients, loadPatients } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function NovoPacienteScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const [gender, setGender] = useState("masculino");
  const { dark } = useTheme();
  const router = useRouter();

  const handleSave = async () => {
    const pacientes = await loadPatients();
    const newPatient = {
      id: Date.now().toString(),
      name,
      age,
      condition,
      gender,
    };
    await savePatients([...pacientes, newPatient]);
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      <Text style={[styles.label, { color: dark ? "#fff" : "#000" }]}>Nome:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: dark ? "#222" : "#fff", color: dark ? "#fff" : "#000" }]}
        value={name}
        onChangeText={setName}
      />

      <Text style={[styles.label, { color: dark ? "#fff" : "#000" }]}>Idade:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: dark ? "#222" : "#fff", color: dark ? "#fff" : "#000" }]}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={[styles.label, { color: dark ? "#fff" : "#000" }]}>Condição:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: dark ? "#222" : "#fff", color: dark ? "#fff" : "#000" }]}
        value={condition}
        onChangeText={setCondition}
      />

      <Text style={[styles.label, { color: dark ? "#fff" : "#000" }]}>Gênero:</Text>
      <View style={styles.genderContainer}>
        {["masculino", "feminino"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.genderButton,
              {
                backgroundColor:
                  gender === option ?  "#42DCDE"  : dark ? "#333" : "#ddd",
              },
            ]}
            onPress={() => setGender(option)}
          >
            <Text style={{ color: dark ? "#fff" : "#000", fontWeight: "bold" }}>
              {option === "masculino" ? "Masculino" : "Feminino"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Salvar" onPress={handleSave} color= "#42DCDE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 4 },
  input: { borderRadius: 8, padding: 10, marginBottom: 12 },
  genderContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  genderButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
});
