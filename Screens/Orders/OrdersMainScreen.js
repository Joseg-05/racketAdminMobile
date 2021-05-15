import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { OrderRow } from "../../components/Order/OrderRow";
import { Appbar } from "react-native-paper";
import { Swipeable } from "react-native-gesture-handler";
import { ordersGet } from "../../api/get";
import { useSelector } from "react-redux";
const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;

// screen that will handle creating and viewing orders
export const OrdersMainScreen = (props) => {
    const user = useSelector((state) => state.user);
    const [userOrders, setUserOrders] = useState(null);

    //on mount get orders for user that are not completed yet
    useEffect(() => {
        //refresh orders when focusing back on to this screen
        const popEvent = props.navigation.addListener("focus", () => {
            const getOrders = async () => {
                const orders = await ordersGet(user);

                clean(orders);
            };
            getOrders();
        });
        return popEvent;
    }, [props.navigation]);

    const clean = (orders) => {
        if (orders !== undefined) {
            const results = orders.filter((e) => {
                return e.completed === false;
            });
            setUserOrders(results);
        }
    };

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
        );
    };

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
            {/* will seperate in to component later */}
            <Appbar
                style={{
                    minWidth: "100%",
                    backgroundColor: "#1e3d58",
                    height: "9%",
                }}
            >
                <Appbar.Content title="Orders" />
                <Appbar.Action
                    icon={() => (
                        <Ionicons
                            name="add-circle-outline"
                            size={24}
                            color="white"
                        />
                    )}
                    onPress={() => {
                        props.navigation.navigate("OrderAddScreen");
                    }}
                />
            </Appbar>
            <View style={{ width: "100%", flex: 1 }}>
                {/* Add a filter component here! */}
                {userOrders && (
                    <FlatList
                        data={userOrders}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        props.navigation.navigate(
                                            "OrderEditScreen",
                                            {
                                                ...item,
                                            }
                                        );
                                    }}
                                >
                                    <Swipeable renderLeftActions={LeftAction}>
                                        <OrderRow orderDetails={item} />
                                    </Swipeable>
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
    Text: {},
});
