import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InDevelopmentScreen from "./inDevelopment";
import PricesScreen from "./prices";
import HomeScreen from "./home";
import TabBar from "../../components/tabBar";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          header: Header,
        }}
        initialRouteName="Home"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Prices" component={PricesScreen} />
        <Tab.Screen name="Wallet" component={InDevelopmentScreen} />
        <Tab.Screen name="Profile" component={InDevelopmentScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabs;
