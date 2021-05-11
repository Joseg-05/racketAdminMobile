import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import { StatusBar } from "expo-status-bar";

import { ordersPut } from "../api/put";

export const CustomerEditForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    // const [orderDetails, setOrderDetails] = useState({
    //     ...props.route.params,
    // });

    const [customerDetails, setCustomerDetails] = useState({
        ...props.route.params.itemData,
    });

    let firstRender = true;
    // useEffect(() => {
    //     if (firstRender) firstRender = false;
    //     else {
    //         setDisableSave(true);
    //     }
    // }, [orderDetails]);

    const updateOrder = async () => {
        const allowedUpdates = ["name", "phone"];
        const dataBody = {};
        //orderDetailsBody
        const customerDetailsBody = Object.keys(customerDetails);

        customerDetailsBody.forEach((el) => {
            if (allowedUpdates.includes(el)) dataBody[el] = customerDetails[el];
        });

        await ordersPut(user, customerDetails._id, dataBody);
        props.navigation.pop();
    };

    console.log(customerDetails);
    return (
        <View>
            <Appbar
                style={{
                    minWidth: "100%",
                    backgroundColor: "#1e3d58",
                    height: "9%",
                }}
            >
                <Appbar.Action
                    icon={() => <Feather name="x" size={24} color="white" />}
                    onPress={() => props.navigation.pop()}
                />
                <Appbar.Content title="Edit Customer" />
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
                                        Name
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
                                value={customerDetails.name}
                                //value={props.route.params.itemData.name}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setCustomerDetails((current) => {
                                        return { ...current, name: val };
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
                                        Phone
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
                                value={customerDetails.phoneNumber}
                                //value={props.route.params.itemData.name}
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setDisableSave(false);
                                    setCustomerDetails((current) => {
                                        return { ...current, phone: val };
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
// test push
