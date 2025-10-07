import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PacientesScreen from "./screens/PacientesScreen";
import DetalheScreen from "./screens/DetalheScreen";
import NovoPacienteScreen from "./screens/NovoPacienteScreen";
import ConfigScreen from "./screens/ConfigScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Início" }} />
        <Stack.Screen name="Pacientes" component={PacientesScreen} />
        <Stack.Screen name="Detalhe" component={DetalheScreen} />
        <Stack.Screen name="NovoPaciente" component={NovoPacienteScreen} />
        <Stack.Screen name="Config" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}