import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";
import { Appbar } from "react-native-paper";
import { OrderForm } from "../components/OrderForm";
import { Feather, Fontisto } from "@expo/vector-icons";

export const OrderDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Appbar style={{ minWidth: "100%", backgroundColor: "#1e3d58" }}>
                <Appbar.Action
                    icon={() => <Feather name="x" size={24} color="white" />}
                    onPress={() => props.navigation.pop()}
                />
                <Appbar.Content title="Edit Order" />
                <TouchableOpacity
                    disabled={false}
                    onPress={() => console.log("hello")}
                >
                    <Appbar.Content title="Save" />
                </TouchableOpacity>
            </Appbar>
            <OrderForm {...props} />
        </SafeAreaView>
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
