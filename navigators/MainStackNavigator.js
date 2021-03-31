import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";

export const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            ></MainStack.Screen>
        </MainStack.Navigator>
    );
};
