import React from "react";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";

export const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
            ></AuthStack.Screen>
            <AuthStack.Screen
                name="Register"
                component={RegistrationScreen}
            ></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};
