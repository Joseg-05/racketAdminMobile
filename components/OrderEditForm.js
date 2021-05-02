import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../context/UserContext";

import { StatusBar } from "expo-status-bar";

import { ordersPut } from "../api/put";

export const OrderEditForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [orderDetails, setOrderDetails] = useState({
        ...props.route.params,
    });

    let firstRender = true;
    // useEffect(() => {
    //     if (firstRender) firstRender = false;
    //     else {
    //         setDisableSave(true);
    //     }
    // }, [orderDetails]);

    const updateOrder = async () => {
        const allowedUpdates = [
            "racketBrand",
            "model",
            "stringPattern",
            "recTension",
            "desiredTension",
            "stringType",
        ];
        const dataBody = {};
        const orderDetailsBody = Object.keys(orderDetails);

        orderDetailsBody.forEach((el) => {
            if (allowedUpdates.includes(el)) dataBody[el] = orderDetails[el];
        });

        await ordersPut(user, orderDetails._id, dataBody);
        props.navigation.pop();
    };

    return (
        <View>
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
                <Appbar.Content title="Edit Order" />
                <TouchableOpacity
                    style={{
                        marginTop: 14,
                        marginRight: 10,
                    }}
                    disabled={disableSave}
                    onPress={async () => {
                        await updateOrder();
                    }}
                >
                    <Appbar.Content
                        color={disableSave ? "gray" : "white"}
                        title="Save"
                    />
                </TouchableOpacity>
            </Appbar>
            {/* will seperate into components later */}
            <View style={styles.container}>
                <View
                    style={{
                        minWidth: "100%",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View style={{ minWidth: "100%" }}>
                        <View>
                            <TextInput
                                mode="flat"
                                label={
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: "#FFD700",
                                        }}
                                    >
                                        Model
                                    </Text>
                                }
                                underlineColor="#FFD700"
                                placeholderTextColor="white"
                                selectionColor="white"
                                theme={{
                                    colors: {
                                        primary: "#FFD700",
                                        text: "white",
                                    },
                                }}
                                value={orderDetails.model}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setOrderDetails((current) => {
                                        return { ...current, model: val };
                                    });
                                }}
                            />
                        </View>

                        <View>
                            <TextInput
                                mode="flat"
                                label={
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: "#FFD700",
                                        }}
                                    >
                                        Racket Brand
                                    </Text>
                                }
                                underlineColor="#FFD700"
                                placeholderTextColor="white"
                                selectionColor="white"
                                theme={{
                                    colors: {
                                        primary: "#FFD700",
                                        text: "white",
                                    },
                                }}
                                value={orderDetails.racketBrand}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setOrderDetails((current) => {
                                        return { ...current, racketBrand: val };
                                    });
                                }}
                            />
                        </View>

                        <View>
                            <TextInput
                                mode="flat"
                                label={
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: "#FFD700",
                                        }}
                                    >
                                        Rec. Tension Range
                                    </Text>
                                }
                                underlineColor="#FFD700"
                                placeholderTextColor="white"
                                selectionColor="white"
                                theme={{
                                    colors: {
                                        primary: "#FFD700",
                                        text: "white",
                                    },
                                }}
                                value={orderDetails.recTension}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setOrderDetails((current) => {
                                        return { ...current, recTension: val };
                                    });
                                }}
                            />
                        </View>

                        <View>
                            <TextInput
                                mode="flat"
                                label={
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: "#FFD700",
                                        }}
                                    >
                                        String Pattern
                                    </Text>
                                }
                                underlineColor="#FFD700"
                                placeholderTextColor="white"
                                selectionColor="white"
                                theme={{
                                    colors: {
                                        primary: "#FFD700",
                                        text: "white",
                                    },
                                }}
                                value={orderDetails.stringPattern}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setOrderDetails((current) => {
                                        return {
                                            ...current,
                                            stringPattern: val,
                                        };
                                    });
                                }}
                            />
                        </View>

                        <View>
                            <TextInput
                                mode="flat"
                                label={
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: "#FFD700",
                                        }}
                                    >
                                        Desired Tension
                                    </Text>
                                }
                                underlineColor="#FFD700"
                                placeholderTextColor="white"
                                selectionColor="white"
                                theme={{
                                    colors: {
                                        primary: "#FFD700",
                                        text: "white",
                                    },
                                }}
                                value={orderDetails.desiredTension}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setOrderDetails((current) => {
                                        return {
                                            ...current,
                                            desiredTension: val,
                                        };
                                    });
                                }}
                            />
                        </View>

                        <View>
                            <TextInput
                                mode="flat"
                                label={
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: "#FFD700",
                                        }}
                                    >
                                        String Type
                                    </Text>
                                }
                                underlineColor="#FFD700"
                                placeholderTextColor="white"
                                selectionColor="white"
                                theme={{
                                    colors: {
                                        primary: "#FFD700",
                                        text: "white",
                                    },
                                }}
                                value={orderDetails.stringType}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setOrderDetails((current) => {
                                        return {
                                            ...current,
                                            stringType: val,
                                        };
                                    });
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
    },

    submitButton: {
        alignSelf: "center",
        position: "absolute",

        bottom: 20,
    },
    text: {
        color: "#FFD700",
        textAlign: "center",
    },
    textInput: {
        width: "100%",
        borderColor: "#FFD700",
        color: "#FFD700",
        backgroundColor: "#36454f",
        fontSize: 20,
        textAlign: "center",
    },
});