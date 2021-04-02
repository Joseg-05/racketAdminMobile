import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import OrdersScreen from "../Screens/OrdersScreen";

export const MainStack = createStackNavigator();

// navigator that is presented when user is logged in
export const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
            ></MainStack.Screen>
            <MainStack.Screen
                name="Orders"
                component={OrdersScreen}
            ></MainStack.Screen>
        </MainStack.Navigator>
    );
};
