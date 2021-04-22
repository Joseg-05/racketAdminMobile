import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { OrdersScreen } from "../Screens/Orders/OrdersScreen";
import { OrderEditScreen } from "../Screens/Orders/OrderEditScreen";
import { OrderAddScreen } from "../Screens/Orders/OrderAddScreen";

export const Stack = createStackNavigator();

export const OrdersNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            mode="modal"
        >
            <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
            <Stack.Screen name="OrderEditScreen" component={OrderEditScreen} />
            <Stack.Screen name="OrderAddScreen" component={OrderAddScreen} />
        </Stack.Navigator>
    );
};
