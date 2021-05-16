import React, { useEffect, useContext, useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { EditTextInput } from "../shared/TextInputs/EditInput";
import { customersPut } from "../../api/put";
import { EditHeaderBar } from "../shared/Headers/EditHeaderBar";

export const CustomerEditForm = (props) => {
    const user = useSelector((state) => state.user);

    const [name, setName] = useState(props.route.params.itemData.name);
    const [phoneNumber, setPhoneNumber] = useState(
        props.route.params.itemData.phoneNumber
    );

    //create one object to send to the api request
    const buildBody = () => {
        return {
            name,
            phoneNumber,
        };
    };

    //handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

    const updateCustomer = async () => {
        // validate input and if valid, update customer
        let errList = validateCustomerInput();

        if (errList.length === 0) {
            await customersPut(
                user,
                props.route.params.itemData._id,
                buildBody()
            );
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
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Appbar style={styles.appbar}>
                    <Appbar.Action
                        icon={() => (
                            <Feather name="x" size={24} color="white" />
                        )}
                        onPress={() => props.navigation.pop()}
                    />

                    <Appbar.Content title="Edit Customer" />

                    <TouchableOpacity
                        style={styles.save}
                        onPress={async () => {
                            await updateCustomer();
                        }}
                    >
                        <Appbar.Content color="white" title="Save" />
                    </TouchableOpacity>
                </Appbar>

                <View style={styles.container}>
                    <View style={styles.input}>
                        <View style={styles.minWidth}>
                            <EditTextInput
                                initialValue={name}
                                handler={inputHandler}
                                setState={setName}
                                title={"Name"}
                            />

                            <EditTextInput
                                initialValue={phoneNumber}
                                handler={inputHandler}
                                setState={setPhoneNumber}
                                title={"phone"}
                            />
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            // onPress={}
                        >
                            <Text style={{ color: "white" }}>Delete</Text>
                        </TouchableOpacity>
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
        // paddingTop: 20,
        paddingBottom: 10,
    },
    save: {
        paddingTop: 10,
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
    deleteButton: {
        width: "100%",
        backgroundColor: "#343a40",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
});
