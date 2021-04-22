import React from "react";
import { LoginScreen } from "../Screens/Auth/LoginScreen";
import { RegistrationScreen } from "../Screens/Auth/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";

export const AuthStack = createStackNavigator();
// navigator that is presented when user is not logged in
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
