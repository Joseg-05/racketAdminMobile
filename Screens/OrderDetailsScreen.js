import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

import { OrderForm } from "../components/OrderForm";

export const OrderDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <OrderForm {...props} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
});
