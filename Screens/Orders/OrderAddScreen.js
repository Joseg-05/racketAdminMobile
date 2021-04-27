import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { OrderAddForm } from "../../components/OrderAddForm";

export const OrderAddScreen = (props) => {
    return (
        <View style={styles.container}>
            <OrderAddForm {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
});
