import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/screens/rootStack";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
