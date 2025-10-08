import * as React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PacientesScreen from "./screens/PacientesScreen";
import DetalheScreen from "./screens/DetalheScreen";
import NovoPacienteScreen from "./screens/NovoPacienteScreen";
import ConfigScreen from "./screens/ConfigScreen";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const { dark } = useTheme();

  return (
    <>
      {/* StatusBar acompanha o tema */}
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor={dark ? "#121212" : "#f5f5f5"}
      />

      <NavigationContainer theme={dark ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: dark ? "#121212" : "#f5f5f5",
            },
            headerTintColor: dark ? "#fff" : "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTransparent: false,   // força header sólido
            headerShadowVisible: false, // remove sombra (opcional)
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Início" }} />
          <Stack.Screen name="Pacientes" component={PacientesScreen} />
          <Stack.Screen name="Detalhe" component={DetalheScreen} />
          <Stack.Screen name="NovoPaciente" component={NovoPacienteScreen} />
          <Stack.Screen name="Config" component={ConfigScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
}
