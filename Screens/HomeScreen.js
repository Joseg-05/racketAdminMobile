import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/actions";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Appbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ordersGet } from "../api/get";

const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;

// screen that contains the main home page users will be directed to when logged in
const HomeScreen = (props) => {
    const [orders, setOrders] = useState(null);
    const [dataOrders, setDataOrders] = useState(null);

    const user = useSelector((state) => state.user);
    useEffect(() => {
        //refresh orders when focusing back on to this screen
        const popEvent = props.navigation.addListener("focus", () => {
            const getOrders = async () => {
                const orders = await ordersGet(user);
                setOrders(orders);
                const clean = cleanData(orders);
                const data = {
                    labels: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D",
                    ],
                    datasets: [
                        {
                            data: clean,
                            color: (opacity = 1) =>
                                `rgba(255, 215, 0, ${opacity})`, // optional
                            strokeWidth: 2, // optional
                        },
                    ],
                    legend: ["Orders Over The Month"], // optional
                };
                setDataOrders(data);
            };
            getOrders();
        });
        return popEvent;
    }, [props.navigation]);

    const cleanData = (data) => {
        if (!data) return;
        const dataMap = new Map();
        for (let i = 1; i < 13; i++) {
            dataMap.set(`0${i}`, { val: 0 });
        }
        data.forEach((el) => {
            const date = el.dueDate.slice(5, 7);
            console.log(date);
            dataMap.get(date).val++;
        });
        const result = [];
        dataMap.forEach((key) => result.push(key.val));

        return result;
    };

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.statusBar}></View>

            <StatusBar style="light" backgroundColor="#1e3d58" />

            <Appbar style={styles.appBar}>
                <Appbar.Content title="Home" />

                <Appbar.Action
                    icon={() => (
                        <Ionicons name="exit" size={24} color="white" />
                    )}
                    onPress={() => {
                        dispatch(logoutUser(user));
                    }}
                />
            </Appbar>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {dataOrders ? (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "white" }}>
                            Welcome to the home page, {user.email}
                        </Text>
                        <LineChart
                            style={{ borderRadius: 10, width: "90%" }}
                            data={dataOrders}
                            width={Dimensions.get("window").width - 20}
                            height={220}
                            chartConfig={{
                                backgroundColor: "white",
                                backgroundGradientFrom: "#343a40",
                                backgroundGradientTo: "#343a40",
                                decimalPlaces: 0,
                                color: (opacity = 1) =>
                                    `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) =>
                                    `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    stroke: "#ffa726",
                                },
                            }}
                        />
                    </View>
                ) : (
                    <View style={styles.text}>
                        <Text style={{ color: "white" }}>Loading</Text>
                    </View>
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
    button: {
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#1e3d58",
        fontSize: 20,
        padding: 20,
    },
    text: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
