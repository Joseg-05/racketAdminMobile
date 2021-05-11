import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { OrderEditForm } from "../../components/Order/OrderEditForm";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const OrderEditScreen = (props) => {
    useEffect(() => {}, [props]);
    return (
        <View style={styles.container}>
            {/* <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#1e3d58",
                }}
            ></View> */}
            <OrderEditForm {...props} />
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
