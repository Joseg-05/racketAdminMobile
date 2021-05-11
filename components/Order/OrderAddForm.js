import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";
import { orderPost } from "../../api/post";
import { customersGet } from "../../api/get";
import { AddTextInput } from "../AddTextInput";

import ModalSelector from "react-native-modal-selector";

export const OrderAddForm = (props) => {
    const user = useContext(UserContext);

    const [model, setModel] = useState("");
    const [racketBrand, setRacketBrand] = useState("");
    const [recTension, setRecTension] = useState("");
    const [stringPattern, setStringPattern] = useState("");
    const [desiredTension, setDesiredTension] = useState("");
    const [stringType, setStringType] = useState("");
    const [customers, setCustomers] = useState(null);

    //handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

    //create one object to send to the api request
    const buildBody = () => {
        return {
            racketBrand,
            recTension,
            stringPattern,
            desiredTension,
            model,
            stringType,
        };
    };

    const createOrder = async () => {
        await orderPost(user, buildBody());
    };

    useEffect(() => {
        async function getCustomers() {
            const data = await customersGet(user);
            setCustomers(data.data);
        }
        getCustomers();
    }, []);

    //will implement later
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
});
