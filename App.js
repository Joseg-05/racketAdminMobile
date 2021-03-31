import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthStackNavigator } from "./navigators/AuthStackNavigator";
import { MainStackNavigator } from "./navigators/MainStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { UserContext } from "./context/UserContext";

const RootStack = createStackNavigator();

const App = (props) => {
    //call cusom hook
    const { auth, state } = useAuth();
    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animationEnabled: false,
                    }}
                >
                    {/* if state has user (aka user has logged in) */}
                    {state.user ? (
                        <RootStack.Screen name={"MainStack"}>
                            {() => (
                                <UserContext.Provider value={state.user}>
                                    <MainStackNavigator />
                                </UserContext.Provider>
                            )}
                        </RootStack.Screen>
                    ) : (
                        <RootStack.Screen
                            name={"RootStack"}
                            component={AuthStackNavigator}
                        />
                    )}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default App;
