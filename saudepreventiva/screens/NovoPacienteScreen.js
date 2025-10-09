import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { savePatient } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function NovoPacienteScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");
  const { dark } = useTheme();
  const accent = "#3b82f6";

  const handleSave = async () => {
    if (!name.trim()) return;
    await savePatient({ name, age, condition });
    navigation.goBack();
  };

  const inputStyle = [
    styles.input,
    { backgroundColor: dark ? "#1e1e1e" : "#fff", color: dark ? "#fff" : "#000" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: dark ? "#121212" : "#f5f5f5" }]}>
      <TextInput
        style={inputStyle}
        placeholder="Nome"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={inputStyle}
        placeholder="Idade"
        placeholderTextColor="#888"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={inputStyle}
        placeholder="Condição"
        placeholderTextColor="#888"
        value={condition}
        onChangeText={setCondition}
      />
      

      <TouchableOpacity style={[styles.button, { backgroundColor: accent }]} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: { padding: 14, borderRadius: 12, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
