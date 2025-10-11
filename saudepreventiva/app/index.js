import { View, Text,Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";

export default function HomeScreen() {
  const router = useRouter();
  const { dark } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: dark ? "#121212" : "#f5f5f5",
        padding: 20,
      }}
    >
        <Image
              source={require("../assets/logo.png")} // <- coloque seu ícone aqui
              style={{ width: 400, height: 400 }}
            />
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 40,
          color: dark ? "#fff" : "#000",
        }}
      >
         SaúdePreventiva
      </Text>

      {[
        { title: "📋 Ver Pacientes", path: "/pacientes" },
        { title: "➕ Novo Paciente", path: "/novo-paciente" },
        { title: "⚙️ Configurações", path: "/config" },
      ].map((btn, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => router.push(btn.path)}
          style={{
            backgroundColor: dark ? "#1e1e1e" : "#fff",
            paddingVertical: 14,
            paddingHorizontal: 40,
            borderRadius: 12,
            marginBottom: 15,
            width: "80%",
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Text style={{ color: dark ? "#fff" : "#000", fontSize: 16 }}>{btn.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
