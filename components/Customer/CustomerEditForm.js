import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import {EditCustomerTextInput} from "../Customer/CustomerEditTextInput"
import { StatusBar } from "expo-status-bar";

import { customersPut } from "../../api/put";

export const CustomerEditForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    // const [orderDetails, setOrderDetails] = useState({
    //     ...props.route.params,
    // });

    const [name, setName] = useState(
        props.route.params.itemData.name )

    const [phoneNumber, setPhoneNumber] = useState(
        props.route.params.itemData.phoneNumber)
    
    // TASK: convert object keys -> seperate states

    let firstRender = true;
    // useEffect(() => {
    //     if (firstRender) firstRender = false;
    //     else {
    //         setDisableSave(true);
    //     }
    // }, [orderDetails]);

    //handle passing data from child to parent ... if time permits will convert to redux
    const inputHandler = (data, setState) => {
        setState(data);
        setDisableSave(false);
    };

    //create one object to send to the api request
    const buildBody = () => {
        return {
            name,
            phoneNumber,
        };
    };

    const updateOrder = async () => {
        await customersPut(user, props.route.params._id, buildBody());
        props.navigation.pop();
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
            {/* TASK : seperate into EditTextInput.js Component */}
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
                        <EditCustomerTextInput
                            initialValue={name}
                            handler={inputHandler}
                            setState={setName}
                            title={"Name"}
                        />

                        <EditCustomerTextInput
                            initialValue={phoneNumber}
                            handler={inputHandler}
                            setState={setPhoneNumber}
                            title={"phone"}
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
// test push
