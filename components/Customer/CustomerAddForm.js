import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import {AddTextInput } from "../AddTextInput";

import { StatusBar } from "expo-status-bar";

import { ordersPut } from "../../api/put";

import { createCustomers } from "../../api/post";

export const CustomerAddForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [textInputModel, setTextInputModel] = useState("");
    const [textInputRacketBrand, setTextInputRacketBrand] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const updateOrder = async () => {
        if (!checkTextInput()) return;

        const dataBody = {};
        const orderDetailsBody = Object.keys(orderDetails);

        orderDetailsBody.forEach((el) => {
            if (allowedUpdates.includes(el)) dataBody[el] = orderDetails[el];
        });

        await ordersPut(user, orderDetails._id, dataBody);
        props.navigation.pop();
    };

    //create one object to send to the api request
    const buildBody = () => {
        return {
            name,
            phone,
        };
    };

    const checkTextInputValidation = () => {
        const alertString = [];
        if (!textInputModel.trim()) {
            alertString.push("Model");
        }

        if (!textInputRacketBrand.trim()) {
            alertString.push("Racket Brand");
        }

        if (alertString.length > 0) {
            alert(
                "Please fill out the following fields:\n" +
                    alertString.join(", ")
            );
            return false;
        }

        return true;
    };

    const createCustomer = async () => {
        
        await createCustomers(user, buildBody());
        console.log(user)
    };

    //handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

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
                <Appbar.Content title="Customer Customer" />
                <TouchableOpacity
                    style={{
                        marginTop: 14,
                        marginRight: 10,
                    }}
                    disabled={false}
                    onPress={async () => {
                        await createCustomer();
                    }}
                >
                    <Appbar.Content
                        // color={disableSave ? "gray" : "white"}
                        color={"white"}
                        title="Add"
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
                        <AddTextInput
                            handler={inputHandler}
                            setState={setName}
                            title={"Name"}
                        />
                        <AddTextInput
                            handler={inputHandler}
                            setState={setPhone}
                            title={"Phone"}
                        />
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
