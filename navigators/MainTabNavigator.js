import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";

//import navigators
import { OrdersNavigator } from "../navigators/OrdersNavigator";
import { CustomerNavigator } from "../navigators/CustomerNavigator";
import { InventoryNavigator } from "../navigators/InventoryNavigator";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

const MainTab = createMaterialBottomTabNavigator();

// navigator that is presented when user is logged in
export const MainTabNavigator = () => {
    return (
        <MainTab.Navigator
            initialRouteName="Home"
            activeColor="#FFD700"
            barStyle={{
                backgroundColor: "#36454a",
            }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainTab.Screen
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ),
                }}
                name="Home"
                component={HomeScreen}
            />
            <MainTab.Screen
                options={{
                    tabBarLabel: "orders",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="tennisball-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Orders"
                component={OrdersNavigator}
            />
            <MainTab.Screen
                options={{
                    tabBarLabel: "Customers",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} />
                    ),
                }}
                name="Customers"
                component={CustomerNavigator}
            />
            <MainTab.Screen
                options={{
                    tabBarLabel: "Inventory",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="inventory"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Inventory"
                component={InventoryNavigator}
            />
        </MainTab.Navigator>
    );
};
