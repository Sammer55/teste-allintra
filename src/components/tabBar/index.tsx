import { useState } from "react";
import { Container, Wrapper } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabItem from "./tabItem";

const TabBar = (props: BottomTabBarProps) => {
  const [currentScreen, setCurrentScreen] = useState("Home");

  const { navigation } = props;

  const handleNavigation = (page: string) => {
    setCurrentScreen(page);
    navigation.navigate(page);
  };

  return (
    <Container>
      <Wrapper>
        <TabItem
          label="Home"
          icon={<Ionicons name="stats-chart-outline" />}
          onPress={handleNavigation}
          screenToNavigate="Home"
          currentScreen={currentScreen}
        />
        <TabItem
          label="Preços"
          icon={<Ionicons name="pricetags-outline" />}
          onPress={handleNavigation}
          screenToNavigate="Prices"
          currentScreen={currentScreen}
        />
        <TabItem
          label="Carteira"
          icon={<Ionicons name="wallet-outline" />}
          onPress={handleNavigation}
          screenToNavigate="Wallet"
          currentScreen={currentScreen}
        />
        <TabItem
          label="Perfil"
          icon={<Ionicons name="person-circle-outline" />}
          onPress={handleNavigation}
          screenToNavigate="Profile"
          currentScreen={currentScreen}
        />
      </Wrapper>
    </Container>
  );
};

export default TabBar;
