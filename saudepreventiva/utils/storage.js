import AsyncStorage from "@react-native-async-storage/async-storage";

const PATIENTS_KEY = "@healthguard:patients";
const PREFS_KEY = "@healthguard:prefs";

export async function savePatients(patients) {
  await AsyncStorage.setItem(PATIENTS_KEY, JSON.stringify(patients));
}

export async function loadPatients() {
  const raw = await AsyncStorage.getItem(PATIENTS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function savePrefs(prefs) {
  await AsyncStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}

export async function loadPrefs() {
  const raw = await AsyncStorage.getItem(PREFS_KEY);
  return raw ? JSON.parse(raw) : {};
}
