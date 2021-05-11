import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../context/UserContext";
import DropDownPicker from "react-native-dropdown-picker";

import { StatusBar } from "expo-status-bar";

import { ordersPost } from "../api/post";
import { AddTextInput } from "./AddTextInput";

export const OrderAddForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [model, setModel] = useState("");
    const [racketBrand, setRacketBrand] = useState("");
    const [recTension, setRecTension] = useState("");
    const [stringPattern, setStringPattern] = useState("");
    const [desiredTension, setDesiredTension] = useState("");

    //states for dropdown pickers
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //     { label: "Apple", value: "apple" },
    //     { label: "Banana", value: "banana" },
    // ]);

    //handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

    const createOrder = async () => {
        await ordersPost(user);
    };

    //build the body json
    //that will be posted to create an order in the api
    const buildBody = (element) => {};
    const checkTextInputValidation = () => {
        const alertString = [];
        if (!model.trim()) {
            alertString.push("Model");
        }

        if (!racketBrand.trim()) {
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
                <Appbar.Content title="Add Order" />
                <TouchableOpacity
                    style={{
                        marginTop: 14,
                        marginRight: 10,
                    }}
                    disabled={false}
                    onPress={async () => {
                        await createOrder();
                    }}
                >
                    <Appbar.Content color={"white"} title="Add" />
                </TouchableOpacity>
            </Appbar>

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
                            setState={setRacketBrand}
                            title={"Racket Brand"}
                        />
                        <AddTextInput
                            handler={inputHandler}
                            setState={setModel}
                            title={"Model"}
                        />
                        <AddTextInput
                            handler={inputHandler}
                            setState={setStringPattern}
                            title={"String Pattern"}
                        />
                        <AddTextInput
                            handler={inputHandler}
                            setState={setRecTension}
                            title={"Rec. Tension Range"}
                        />
                        <AddTextInput
                            handler={inputHandler}
                            setState={setDesiredTension}
                            title={"Desired Tension"}
                        />
                        <AddTextInput
                            handler={inputHandler}
                            setState={setStringPattern}
                            title={"String Type"}
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
