import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/screens/rootStack";
import { ToastProvider } from "react-native-toast-notifications";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <ToastProvider>
      <StatusBar style="dark" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </ToastProvider>
  );
}
