import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./rootStack";

const Screens = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Screens;
