import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InventoryScreen } from "../Screens/Inventory/InventoryScreen";
import { InventoryDetailsScreen } from "../Screens/Inventory/InventoryDetailsScreen";

export const Stack = createStackNavigator();

export const InventoryNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
            <Stack.Screen
                name="InventoryDetailsScreen"
                component={InventoryDetailsScreen}
            />
        </Stack.Navigator>
    );
};
