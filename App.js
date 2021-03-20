import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Screens/Home";

import Orders from "./Screens/Orders";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = (props) => {
    useEffect(() => {
        (async () => {
            const createUser = await fetch(
                "https://racketadmin.herokuapp.com/users",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: "Tommy",
                        email: "tlay191020@gmail.com",
                        password: "Tommyray15!",
                    }),
                }
            );
            const result = await createUser.json();
            console.log(result);
        })();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home Page", headerShown: false }}
                />
                <Stack.Screen
                    name="Orders"
                    component={Orders}
                    options={{ title: "Orders", headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
