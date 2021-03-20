import { StackActions } from "@react-navigation/routers";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// function HomeScreenStack()) {
//     return (
//         <Stack.
//     )
// }

function MyBottomNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"></Tab.Screen>
            <Tab.Screen name="Orders"></Tab.Screen>
        </Tab.Navigator>
    );
}
