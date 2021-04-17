import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
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

    //on mount get orders for user that are not completed yet
    useEffect(() => {
        const getOrders = async () => {
            const orders = await ordersGet(user);

            clean(orders);
        };
        getOrders();
    }, []);

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
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                {userOrders && (
                    <FlatList
                        data={userOrders}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        props.navigation.navigate(
                                            "OrderDetailsScreen",
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
