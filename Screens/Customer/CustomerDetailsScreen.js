import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

export const CustomerDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>{props.route.params.itemData.name}</Text>
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
