import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import { loadPatients, savePatients } from "../utils/storage";

export default function NovoPacienteScreen({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [ub, setUb] = useState("");

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
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Novo Paciente</Text>

      <Text>Nome</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nome completo"
        style={styles.input}
      />

      <Text>Idade</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        placeholder="Ex: 45"
        style={styles.input}
      />

      <Text>UB/Clínica</Text>
      <TextInput
        value={ub}
        onChangeText={setUb}
        placeholder="UBS Centro"
        style={styles.input}
      />

      <Button title="Salvar" onPress={onSave} />
      <View style={{ marginTop: 8 }}>
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 4 },
});
