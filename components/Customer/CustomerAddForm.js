import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import { StatusBar } from "expo-status-bar";

import { customersPost } from "../../api/post";

import { EditHeaderBar } from "../shared/Headers/EditHeaderBar";

import { AddTextInput } from "../shared/TextInputs/AddInput";

export const CustomerAddForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const buildBody = () => {
        return {
            name,
            phoneNumber,
        };
    };

    const inputHandler = (data, setState) => {
        setState(data);
    };

    const saveHandler = async () => {
        await customersPost(user, buildBody());
        props.navigation.pop();
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

    return (
        <View>
            <EditHeaderBar
                {...props}
                saveHandler={saveHandler}
                title={"Add Customer"}
                operationTitle={"Add"}
            />

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
                            setState={setPhoneNumber}
                            title={"Phone Number"}
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
