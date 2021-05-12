import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from "react-native";
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { InventoryRow } from '../../components/Inventory/InventoryRow'
import { UserContext } from '../../context/UserContext'
import { Appbar } from 'react-native-paper'
import { Swipeable } from 'react-native-gesture-handler'
import { stockGet } from '../../api/get'

const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight

// screen to handle viewing inventory
export const InventoryScreen = (props) => {
    const user = React.useContext(UserContext)
    const [userInventory, setUserInventory] = useState(null)

    // on mount, get inventory for user
    useEffect(() => {
        // refresh orders when focusing back on this screen
        const popEvent = props.navigation.addListener("focus", () => {
            const getInventory = async () => {
                const inventory = await stockGet(user)

                // clean(inventory)
                setUserInventory(inventory)
            }

            getInventory()
        })

        return popEvent
    }, [props.navigation])

    const clean = (inventory) => {
        setUserInventory(inventory)
    }

    const LeftAction = (progress, dragX) => {
        return (
            <View
                style={{
                    fontSize: 20,
                    color: "white",
                    backgroundColor: "#FFD700",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        padding: 20,
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    Completed
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container} >
            <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#1e3d58",
                }}
            ></View>
            <StatusBar style="light" backgroundColor="#1e3d58" />
            {/* will separate in to component later */}
            <Appbar
                style={{
                    minWidth: "100%",
                    backgroundColor: "#1e3d58",
                    height: "9%",
                }}
            >
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
                        props.navigation.navigate("InventoryAddScreen")
                    }}
                />
            </Appbar>
            <View style={{ width: "100%", flex: 1 }} >
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
                                        )
                                    }}
                                >
                                    <Swipeable renderLeftAction={LeftAction}>
                                        <InventoryRow inventoryDetails={item} />
                                    </Swipeable>
                                </TouchableOpacity>
                            )
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
    Text: {},
})