import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// change to OrdersScreen
// screen that will handle creating and viewing orders
const OrdersScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Orders page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },
});

export default OrdersScreen;
