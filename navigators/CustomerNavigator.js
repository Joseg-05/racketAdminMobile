import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import CustomersScreen from "../Screens/Customer/CustomersScreen";
import { CustomerEditScreen } from "../Screens/Customer/CustomerEditScreen";
import {CustomerAddScreen} from "../Screens/Customer/CustomerAddScreen";
export const Stack = createStackNavigator();

export const CustomerNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CustomersScreen" component={CustomersScreen} />
            <Stack.Screen
                name="CustomerEditScreen"
                component={CustomerEditScreen}
            />
            <Stack.Screen name="CustomerAddScreen" component={CustomerAddScreen} />
        </Stack.Navigator>
    );
};
