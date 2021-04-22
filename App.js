import React from "react";
// import navigators
import { AuthStackNavigator } from "./navigators/AuthStackNavigator";
import { MainTabNavigator } from "./navigators/MainTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import context
import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";
// import auth hook
import { useAuth } from "./hooks/useAuth";

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
                                    <MainTabNavigator />
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
