import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InventoryMainScreen } from "../Screens/Inventory/InventoryMainScreen";
import { InventoryEditScreen } from "../Screens/Inventory/InventoryEditScreen";
import { InventoryAddScreen } from "../Screens/Inventory/InventoryAddScreen";

export const Stack = createStackNavigator();

export const InventoryNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="InventoryScreen"
                component={InventoryMainScreen}
            />
            <Stack.Screen
                name="InventoryEditScreen"
                component={InventoryEditScreen}
            />
            <Stack.Screen
                name="InventoryAddScreen"
                component={InventoryAddScreen}
            />
        </Stack.Navigator>
    );
};
