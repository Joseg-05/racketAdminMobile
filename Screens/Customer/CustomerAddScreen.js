import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { CustomerAddForm } from "../../components/Customer/CustomerAddForm";
import { StatusBar } from "expo-status-bar";
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const CustomerAddScreen = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#1e3d58",
                }}
            ></View>
            <StatusBar style="light" backgroundColor="#1e3d58" />
            <CustomerAddForm {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
});
