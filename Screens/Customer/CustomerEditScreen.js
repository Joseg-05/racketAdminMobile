import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform, View } from "react-native";
import Constants from "expo-constants";
import { CustomerEditForm } from "../../components/Customer/CustomerEditForm";
import { StatusBar } from "expo-status-bar";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const CustomerEditScreen = (props) => {
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
            <CustomerEditForm {...props} />
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
    name: {
        color: "white",
    },
});
