import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../context/UserContext";
import DropDownPicker from "react-native-dropdown-picker";

import { StatusBar } from "expo-status-bar";

import { ordersPost } from "../api/post";

export const OrderAddForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [textInputModel, setTextInputModel] = useState("");
    const [textInputRacketBrand, setTextInputRacketBrand] = useState("");

    //states for dropdown pickers
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //     { label: "Apple", value: "apple" },
    //     { label: "Banana", value: "banana" },
    // ]);

    const createOrder = async () => {
        await ordersPost(user);
    };
    //build the body json
    //that will be posted to create an order in the api
    const buildBody = (element) => {};
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
                        {/* <View style={{ width: 350 }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </View> */}
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
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setTextInputModel(val);
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
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setTextInputRacketBrand(val);
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
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setTextInputRacketBrand(val);
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
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setTextInputRacketBrand(val);
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
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setTextInputRacketBrand(val);
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
                                style={styles.textInput}
                                onChangeText={(val) => {
                                    setTextInputRacketBrand(val);
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
