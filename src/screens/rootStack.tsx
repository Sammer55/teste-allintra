import { SafeAreaView } from "react-native";
import SplashScreen from "./splash";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import TabsScreens from "./tabsScreens";

const Stack = createStackNavigator();

const StackScreens = () => {
  const theme = useTheme();
  const backgroundColor = theme.background;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor },
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="TabsScreens" component={TabsScreens} />
    </Stack.Navigator>
  );
};

export default StackScreens;
