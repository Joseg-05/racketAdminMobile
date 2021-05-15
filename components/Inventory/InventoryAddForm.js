import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { stockPost } from "../../api/post";
import { AddTextInput, AddNumberInput } from "../shared/TextInputs/AddInput";

export const InventoryAddForm = (props) => {
    const user = useSelector((state) => state.user);

    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");

    // create one object to send to api request
    const buildBody = () => {
        return {
            productName,
            quantity,
        };
    };

    // handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
        setDisableSave(false);
    };

    const createInventory = async () => {
        // validate input and if valid, update inventory
        let errList = inputValidation()

        // if no errors, post
        if (errList.length === 0) {
            await stockPost(user, buildBody());
            props.navigation.pop();
        }
        // else alert user of errors
        else {
            alert(
                "Please fill out the following fields:\n" +
                errList.join(", ")
            );
        }
    };

    const inputValidation = () => {
        const alertString = [];
        
        if (productName.length === 0) {
            alertString.push("Product Name");
        }

        if (quantity.length === 0) {
            alertString.push("Quantity");
        }

        return alertString
    };

    return (
        <View>
            <Appbar style={styles.appbar} >
                <Appbar.Action
                    icon={() => <Feather name="x" size={24} color="white" />}
                    onPress={() => props.navigation.pop()}
                />

                <Appbar.Content title="Add Inventory" />

                <TouchableOpacity
                    style={styles.add}
                    onPress={async () => {
                        await createInventory();
                    }}
                >
                    <Appbar.Content color="white" title="Add" />
                </TouchableOpacity>
            </Appbar>

            <View style={styles.container}>
                <View style={styles.input}>
                    <View style={styles.minWidth}>
                        <AddTextInput
                            handler={inputHandler}
                            setState={setProductName}
                            title={"Product Name"}
                        />

                        <AddNumberInput
                            handler={inputHandler}
                            setState={setQuantity}
                            title={"Quantity"}
                        />
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
