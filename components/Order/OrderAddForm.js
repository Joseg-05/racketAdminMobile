import React, { useEffect, useContext, useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { orderPost } from "../../api/post";
import { customersGet } from "../../api/get";
import { AddTextInput, AddDateInput } from "../shared/TextInputs/AddInput";

import ModalSelector from "react-native-modal-selector";

const genDate = () => {
    const d = new Date();
    return `${d.getMonth()}/${d.getDay()}`;
};

export const OrderAddForm = (props) => {
    const user = useSelector((state) => state.user);

    const [model, setModel] = useState("");
    const [racketBrand, setRacketBrand] = useState("");
    const [recTension, setRecTension] = useState("");
    const [stringPattern, setStringPattern] = useState("");
    const [desiredTension, setDesiredTension] = useState("");
    const [stringType, setStringType] = useState("");
    const [dueDate, setDueDate] = useState(new Date());

    //create one object to send to the api request
    const buildBody = () => {
        return {
            racketBrand,
            recTension,
            stringPattern,
            desiredTension,
            model,
            stringType,
            dueDate,
        };
    };

    //handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

    const createOrder = async () => {
        // validate input and if valid, add order
        let errList = validateOrderInput();

        if (errList.length === 0) {
            await orderPost(user, buildBody());
            props.navigation.pop();
        } else {
            alert(
                "Please fill out the following fields:\n" + errList.join(", ")
            );
        }
    };

    const validateOrderInput = () => {
        const alertString = [];

        if (model.length === 0) {
            alertString.push("Model");
        }

        if (racketBrand.length === 0) {
            alertString.push("Racket Brand");
        }

        if (recTension.length === 0) {
            alertString.push("Rec. Tension Range");
        }

        if (stringPattern.length === 0) {
            alertString.push("String Pattern");
        }

        if (desiredTension.length === 0) {
            alertString.push("Desired Tension");
        }

        if (stringType.length === 0) {
            alertString.push("String Type");
        }

        return alertString;
    };

    return (
        <TouchableWithoutFeedback>
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
                            <AddDateInput
                                handler={inputHandler}
                                setState={setDueDate}
                            />
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
                                setState={setStringType}
                                title={"String Type"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
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
    datePickerButton: {
        backgroundColor: "white",
        width: "90%",
    },
});
