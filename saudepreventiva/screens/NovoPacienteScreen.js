import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from "react-native";
import { loadPatients, savePatients } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function NovoPacienteScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [ub, setUb] = useState("");
  const { dark } = useTheme();

  const onSave = async () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Nome é obrigatório");
      return;
    }
    const pts = await loadPatients();
    const newPatient = {
      id: `p${Date.now()}`,
      name,
      age: Number(age),
      ub,
      lastExam: {},
      alerts: [],
    };
    const updated = [newPatient, ...pts];
    await savePatients(updated);
    Alert.alert("Sucesso", "Paciente salvo!");
    navigation.goBack();
  };

  const onClear = () => {
    setName("");
    setAge("");
    setUb("");
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: dark ? "#121212" : "#fff" }]}>
      <Text style={[styles.subtitle, { color: dark ? "#fff" : "#000" }]}>Novo Paciente</Text>

      <Text style={{ color: dark ? "#fff" : "#000" }}>Nome</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nome completo"
        placeholderTextColor={dark ? "#888" : "#999"}
        style={[styles.input, { color: dark ? "#fff" : "#000", borderBottomColor: dark ? "#888" : "#000" }]}
      />

      <Text style={{ color: dark ? "#fff" : "#000" }}>Idade</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholder="Ex: 45"
        placeholderTextColor={dark ? "#888" : "#999"}
        style={[styles.input, { color: dark ? "#fff" : "#000", borderBottomColor: dark ? "#888" : "#000" }]}
      />

      <Text style={{ color: dark ? "#fff" : "#000" }}>UB/Clínica</Text>
      <TextInput
        value={ub}
        onChangeText={setUb}
        placeholder="UBS Centro"
        placeholderTextColor={dark ? "#888" : "#999"}
        style={[styles.input, { color: dark ? "#fff" : "#000", borderBottomColor: dark ? "#888" : "#000" }]}
      />

      <Button title="Salvar" onPress={onSave} />
      <View style={{ marginTop: 8 }}>
        <Button title="Limpar" onPress={onClear} />
      </View>

      <View style={{ marginTop: 24 }}>
        <Text style={{ fontWeight: "bold", color: dark ? "#fff" : "#000" }}>Pré-visualização</Text>
        <Text style={{ color: dark ? "#fff" : "#000" }}>Nome: {name || "-"}</Text>
        <Text style={{ color: dark ? "#fff" : "#000" }}>Idade: {age || "-"}</Text>
        <Text style={{ color: dark ? "#fff" : "#000" }}>UB: {ub || "-"}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 4 },
});
