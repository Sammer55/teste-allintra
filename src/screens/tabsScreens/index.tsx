import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./tabBar";
import HomeScreen from "./home";
import InDevelopmentScreen from "./inDevelopment";
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={InDevelopmentScreen} />
        <Tab.Screen name="Transactions" component={InDevelopmentScreen} />
        <Tab.Screen name="Profile" component={InDevelopmentScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabs;
