import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import Constants from "expo-constants";

import { OrderEditForm } from "../../components/OrderEditForm";

export const OrderEditScreen = (props) => {
    useEffect(() => {});
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#1e3d58" />
            <OrderEditForm {...props} />
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
