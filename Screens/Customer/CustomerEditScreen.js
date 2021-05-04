import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { CustomerEditForm } from "../../components/CustomerEditForm";
import { StatusBar } from "expo-status-bar";
export const CustomerEditScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#1e3d58" />
            <CustomerEditForm {...props} />
        </SafeAreaView>
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
    name: {
        color: "white",
    },
});
