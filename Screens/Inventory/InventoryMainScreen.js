import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { InventoryRow } from "../../components/Inventory/InventoryRow";

import { useSelector } from "react-redux";
import { Appbar } from "react-native-paper";
import { Swipeable } from "react-native-gesture-handler";
import { stockGet } from "../../api/get";

const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;

// screen to handle viewing inventory
export const InventoryMainScreen = (props) => {
    const user = useSelector((state) => state.user);
    const [userInventory, setUserInventory] = useState(null);

    // on mount, get inventory for user
    useEffect(() => {
        // refresh orders when focusing back on this screen
        const popEvent = props.navigation.addListener("focus", () => {
            const getInventory = async () => {
                const inventory = await stockGet(user);
                setUserInventory(inventory);
            };

            getInventory();
        });

        return popEvent;
    }, [props.navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.statusBar}></View>

            <StatusBar style="light" backgroundColor="#1e3d58" />

            <Appbar style={styles.appBar} >
                <Appbar.Content title="Inventory" />
                
                <Appbar.Action
                    icon={() => (
                        <Ionicons
                            name="add-circle-outline"
                            size={24}
                            color="white"
                        />
                    )}
                    onPress={() => {
                        props.navigation.navigate("InventoryAddScreen");
                    }}
                />
            </Appbar>

            <View style={styles.inventory}>
                {/* add a filter component here! */}
                {userInventory && (
                    <FlatList
                        data={userInventory}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        props.navigation.navigate(
                                            "InventoryEditScreen",
                                            {
                                                ...item,
                                            }
                                        );
                                    }}
                                >
                                    <InventoryRow inventoryDetails={item} />
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) => item._id}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#36454f",
    },
    statusBar: {
        width: "100%",
        height: STATUS_BAR_HEIGHT,
        backgroundColor: "#1e3d58",
    },
    appBar: {
        minWidth: "100%",
        backgroundColor: "#1e3d58",
        height: "9%",
    },
    inventory: {
        width: "100%",
        flex: 1,
    },
});
