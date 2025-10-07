import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import { loadPatients, savePatients } from "../../src/storage";
import { v4 as uuidv4 } from "uuid"; // ou use Date.now() se preferir

export default function NewPatient({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [ub, setUb] = useState("");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    (async () => {
      const pts = await loadPatients();
      setPatients(pts ?? []);
    })();
  }, []);

  const onSave = async () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Nome é obrigatório");
      return;
    }
    const newPatient = {
      id: `p${Date.now()}`,
      name: name.trim(),
      age: age ? Number(age) : null,
      ub: ub || "Sem UBS",
      lastExam: {},
      alerts: [],
    };
    const updated = [newPatient, ...patients];
    setPatients(updated);
    await savePatients(updated);
    Alert.alert("Sucesso", "Paciente salvo localmente");
    // opcional: navegar de volta
  };

  const onClear = () => {
    setName("");
    setAge("");
    setUb("");
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Novo Paciente</Text>

      <Text>Nome</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Nome completo" style={{ borderBottomWidth: 1, marginBottom: 12 }} />

      <Text>Idade</Text>
      <TextInput value={age} onChangeText={setAge} placeholder="Ex: 45" keyboardType="numeric" style={{ borderBottomWidth: 1, marginBottom: 12 }} />

      <Text>UB / Clínica</Text>
      <TextInput value={ub} onChangeText={setUb} placeholder="UBS Centro" style={{ borderBottomWidth: 1, marginBottom: 12 }} />

      <View style={{ marginVertical: 12 }}>
        <Button title="Salvar" onPress={onSave} />
      </View>

      <View style={{ marginVertical: 6 }}>
        <Button title="Limpar" onPress={onClear} />
      </View>

      <View style={{ marginTop: 24 }}>
        <Text style={{ fontWeight: "bold" }}>Pré-visualização</Text>
        <Text>Nome: {name || "-"}</Text>
        <Text>Idade: {age || "-"}</Text>
        <Text>UB: {ub || "-"}</Text>
      </View>
    </ScrollView>
  );
}
