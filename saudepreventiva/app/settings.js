import React, { useEffect, useState } from "react";
import { View, Text, Switch, Button } from "react-native";
import { loadPrefs, savePrefs } from "../src/storage";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    (async () => {
      const p = await loadPrefs();
      if (p) setDarkMode(!!p.darkMode);
    })();
  }, []);

  const toggle = async (val) => {
    setDarkMode(val);
    await savePrefs({ darkMode: val });
  };

  const clearPrefs = async () => {
    await savePrefs({ darkMode: false });
    setDarkMode(false);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Configurações</Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Text style={{ marginRight: 8 }}>Modo escuro</Text>
        <Switch value={darkMode} onValueChange={toggle} />
      </View>

      <View style={{ marginTop: 24 }}>
        <Button title="Resetar preferências" onPress={clearPrefs} />
      </View>
    </View>
  );
}
