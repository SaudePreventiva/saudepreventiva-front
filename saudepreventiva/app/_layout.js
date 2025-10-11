import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { Image, Text, View } from "react-native";

function HeaderTitle() {
  const { dark } = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Image
        source={require("../assets/logo.png")} // 👈 coloque seu ícone aqui
        style={{ width: 32, height: 32, resizeMode: "contain" }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: dark ? "#fff" : "#000",
        }}
      >
        Saúde Preventiva
      </Text>
    </View>
  );
}

// 🔥 Componente separado pra poder usar o hook `useTheme()`
function ThemedStack() {
  const { dark } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: dark ? "#121212" : "#fff",
          shadowColor: "transparent",
        },
        headerTintColor: dark ? "#fff" : "black",
        headerTitleAlign: "center",
        headerTitle: () => <HeaderTitle />,
        headerBackTitleVisible: false,
      }}
    />
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}
