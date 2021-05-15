import React from "react";
// import navigators
import { AuthStackNavigator } from "../navigators/AuthStackNavigator";
import { MainTabNavigator } from "../navigators/MainTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

const RootStack = createStackNavigator();

export const RootStackNavigator = (props) => {
    const user = useSelector((state) => state.user);

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationEnabled: false,
                }}
            >
                {/* if state has user (aka user has logged in) */}
                {user.token ? (
                    <RootStack.Screen name={"MainStack"}>
                        {() => <MainTabNavigator />}
                    </RootStack.Screen>
                ) : (
                    <RootStack.Screen
                        name={"RootStack"}
                        component={AuthStackNavigator}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
