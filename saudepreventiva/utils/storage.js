import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@pacientes";

export async function savePatients(pacientes) {
  try {
    const jsonValue = JSON.stringify(pacientes);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error("Erro ao salvar pacientes:", error);
  }
}

export async function loadPatients() {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Erro ao carregar pacientes:", error);
    return [];
  }
}

export async function addPatient(novoPaciente) {
  try {
    const pacientes = await loadPatients();
    const newList = [...pacientes, novoPaciente];
    await savePatients(newList);
  } catch (error) {
    console.error("Erro ao adicionar paciente:", error);
  }
}

export async function deletePatient(id) {
  try {
    const pacientes = await loadPatients();
    const updated = pacientes.filter((_, index) => index !== id);
    await savePatients(updated);
  } catch (error) {
    console.error("Erro ao deletar paciente:", error);
  }
}
