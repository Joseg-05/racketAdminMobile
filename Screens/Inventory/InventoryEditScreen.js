import React, { useEffect } from "react";
import { StyleSheet, Platform, View } from "react-native";
import Constants from "expo-constants";
import { InventoryEditForm } from "../../components/Inventory/InventoryEditForm";
import { StatusBar } from 'expo-status-bar'


const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;


export const InventoryEditScreen = (props) => {
    useEffect(() => {}, [props]);
    return (
        <View style={styles.container}>
            <View style={styles.statusBar} ></View>
            <InventoryEditForm {...props} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
    statusBar: {
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: '#1e3d58',
    },
});
