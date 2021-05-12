import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InventoryScreen } from "../Screens/Inventory/InventoryScreen";
import { InventoryEditScreen } from "../Screens/Inventory/InventoryEditScreen";
import { InventoryAddScreen } from '../Screens/Inventory/InventoryAddScreen'

export const Stack = createStackNavigator();

export const InventoryNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
            <Stack.Screen name="InventoryEditScreen" component={InventoryEditScreen} />
            <Stack.Screen name="InventoryAddScreen" component={InventoryAddScreen} />
        </Stack.Navigator>
    );
};
