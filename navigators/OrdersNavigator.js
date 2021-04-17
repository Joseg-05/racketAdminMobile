import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../Screens/OrdersScreen";
import { OrderDetailsScreen } from "../Screens/OrderDetailsScreen";
import { StackActions } from "@react-navigation/routers";

export const Stack = createStackNavigator();

export const OrdersNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
            <Stack.Screen
                name="OrderDetailsScreen"
                component={OrderDetailsScreen}
            />
        </Stack.Navigator>
    );
};
