import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import CustomersScreen from "../Screens/CustomersScreen";

import { OrdersNavigator } from "../navigators/OrdersNavigator";
import { Ionicons } from "@expo/vector-icons";

export const MainTab = createMaterialBottomTabNavigator();

// navigator that is presented when user is logged in
export const MainTabNavigator = () => {
    return (
        <MainTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainTab.Screen name="Home" component={HomeScreen} />
            <MainTab.Screen name="Orders" component={OrdersNavigator} />
            <MainTab.Screen name="Customers" component={CustomersScreen} />
        </MainTab.Navigator>
    );
};
