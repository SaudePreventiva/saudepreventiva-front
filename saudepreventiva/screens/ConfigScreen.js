import React, { useEffect, useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { loadPrefs, savePrefs } from "../utils/storage";

export default function ConfigScreen() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    (async () => {
      const prefs = await loadPrefs();
      if (prefs?.darkMode) setDark(true);
    })();
  }, []);

  const toggle = async (val) => {
    setDark(val);
    await savePrefs({ darkMode: val });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Configurações</Text>
      <View style={{ flexDirection: "row", marginTop: 16, alignItems: "center" }}>
        <Text style={{ marginRight: 8 }}>Modo escuro</Text>
        <Switch value={dark} onValueChange={toggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  subtitle: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
});
