import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../home/HomeScreen";
import ProfileScreen from "../profile/ProfileScreen";
import SettingsScreen from "../settings/SettingsScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useCounterStore } from "../../store/counter-store";

const Tab = createBottomTabNavigator();


export const BottomTabNavigator = () => {

    const counter = useCounterStore((state) => state.count)
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            headerTitle: `Contador: ${counter}`,
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
