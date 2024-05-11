import React from "react";
import SplashScreen from "./src/screens/splash";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
}
