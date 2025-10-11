import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { loadPatients } from "../utils/storage";
import { useTheme } from "../context/ThemeContext";

export default function PacientesScreen() {
  const [pacientes, setPacientes] = useState([]);
  const router = useRouter();
  const { dark } = useTheme();

  useEffect(() => {
    const fetch = async () => {
      const data = await loadPatients();
      setPacientes(data);
    };
    fetch();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: dark ? "#121212" : "#f5f5f5",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: dark ? "#fff" : "#000",
        }}
      >
        👥 Pacientes
      </Text>

      {pacientes.length === 0 ? (
        <Text style={{ color: dark ? "#aaa" : "#555" }}>Nenhum paciente cadastrado.</Text>
      ) : (
        <FlatList
          data={pacientes}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                backgroundColor: dark ? "#1e1e1e" : "#fff",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
                elevation: 2,
              }}
              onPress={() => router.push(`/paciente/${index}`)}
            >
              <Text style={{ color: dark ? "#fff" : "#000", fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ color: dark ? "#ccc" : "#444" }}>{item.age} anos</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
