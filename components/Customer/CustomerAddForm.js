import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { customersPost } from "../../api/post";
import { EditHeaderBar } from "../shared/Headers/EditHeaderBar";
import { AddTextInput } from "../shared/TextInputs/AddInput";


export const CustomerAddForm = (props) => {
    const user = useSelector((state) => state.user);

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // create one object to send to api request
    const buildBody = () => {
        return {
            name,
            phoneNumber,
        };
    };

    // handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

    const createCustomer = async () => {
        // validate input and if valid, add customer
        let errList = validateCustomerInput();

        if (errList.length === 0) {
            await customersPost(user, buildBody());
            props.navigation.pop();
        } else {
            alert(
                "Please fill out the following fields:\n" + errList.join(", ")
            );
        }
    };

    const validateCustomerInput = () => {
        const alertString = [];

        if (name.length === 0) {
            alertString.push("Name");
        }

        if (phoneNumber.length === 0) {
            alertString.push("Phone Number");
        }

        return alertString;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View>
                <Appbar style={styles.appbar} >
                    <Appbar.Action
                        icon={() => <Feather name="x" size={24} color="white" />}
                        onPress={() => props.navigation.pop()}
                    />

                    <Appbar.Content title="Add Customer" />

                    <TouchableOpacity
                        style={styles.add}
                        onPress={async () => {
                            await createCustomer();
                        }}
                    >
                        <Appbar.Content color="white" title="Add" />
                    </TouchableOpacity>
                </Appbar>

                <View style={styles.container} >
                    <View style={styles.input} >
                        <View style={styles.minWidth}>
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
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    appbar: {
        minWidth: "100%",
        backgroundColor: "#1e3d58",
    },
    add: {
        marginTop: 14,
        marginRight: 10,
    },
    container: {
        flexDirection: "column",
        flex: 1,
    },
    input: {
        minWidth: "100%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    minWidth: {
        minWidth: "100%",
    },
});
