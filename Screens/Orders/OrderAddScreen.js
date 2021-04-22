import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export const OrderAddScreen = (props) => {
    return (
        <View style={styles.container}>
            <Appbar
                style={{
                    minWidth: "100%",
                    backgroundColor: "#1e3d58",
                }}
            >
                <Appbar.Action
                    icon={() => <Feather name="x" size={24} color="white" />}
                    onPress={() => props.navigation.pop()}
                />
                <Appbar.Content title="Add Order" />
            </Appbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
});
