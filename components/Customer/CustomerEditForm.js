import React, { useEffect, useContext, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { Feather, Fontisto } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import { EditTextInput } from "../EditTextInput";
import { customersPut } from "../../api/put";

import { EditHeaderBar } from "../EditHeaderBar";

export const CustomerEditForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [name, setName] = useState(props.route.params.itemData.name);
    const [phoneNumber, setPhoneNumber] = useState(
        props.route.params.itemData.phoneNumber
    );

    //handle passing data from child to parent ... if time permits will convert to redux
    const inputHandler = (data, setState) => {
        setState(data);
        setDisableSave(false);
    };

    const saveHandler = async () => {
        await customersPut(user, props.route.params.itemData._id, buildBody());
        props.navigation.pop();
    };

    //create one object to send to the api request
    const buildBody = () => {
        return {
            name,
            phoneNumber,
        };
    };

    return (
        <View>
            <EditHeaderBar
                {...props}
                saveHandler={saveHandler}
                title={"Edit Customer"}
                operationTitle={"Save"}
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
