import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform, View } from "react-native";
import Constants from "expo-constants";
import { CustomerEditForm } from "../../components/Customer/CustomerEditForm";
import { StatusBar } from "expo-status-bar";

const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;

export const CustomerEditScreen = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT + 30,
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
        // paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
    name: {
        color: "white",
    },
});
