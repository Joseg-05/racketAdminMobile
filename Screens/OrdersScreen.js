import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    Modal,
} from "react-native";
import { UserContext } from "../context/UserContext";
import { ordersGet } from "../api/get";
import Constants from "expo-constants";

import { OrderRow } from "../components/OrderRow";
import { Swipeable } from "react-native-gesture-handler";
// change to OrdersScreen
// screen that will handle creating and viewing orders
const OrdersScreen = (props) => {
    const user = React.useContext(UserContext);
    const [userOrders, setUserOrders] = useState(null);
    useEffect(() => {
        const getOrders = async () => {
            const orders = await ordersGet(user);
            setUserOrders(orders);
        };
        getOrders();
    }, []);

    const LeftAction = (progress, dragX) => {
        return (
            <View
                style={{
                    fontSize: 20,
                    color: "white",
                    backgroundColor: "green",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex: 1,
                }}
            >
                <Text style={{ padding: 20, fontSize: 20, color: "white" }}>
                    Completed
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                {userOrders && (
                    <FlatList
                        data={userOrders}
                        renderItem={({ item }) => {
                            return (
                                <Swipeable renderLeftActions={LeftAction}>
                                    <OrderRow orderDetails={item} />
                                </Swipeable>
                            );
                        }}
                        keyExtractor={(item) => item._id}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,

        alignItems: "center",
        backgroundColor: "#36454f",
    },
    Text: {},
});

export default OrdersScreen;
