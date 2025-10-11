import { View, Text, Switch } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ConfigScreen() {
  const { dark, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: dark ? "#121212" : "#f5f5f5",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: dark ? "#fff" : "#000" }}>
        ⚙️ Configurações
      </Text>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={{ color: dark ? "#ccc" : "#333", marginBottom: 10, fontSize: 16 }}>
          Tema atual: {dark ? "Escuro 🌙" : "Claro ☀️"}
        </Text>
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}
