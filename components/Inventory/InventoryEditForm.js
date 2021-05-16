import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { stockPut } from "../../api/put";
import { EditTextInput, EditNumberInput } from "../shared/TextInputs/EditInput";

export const InventoryEditForm = (props) => {
    const user = useSelector((state) => state.user);
    const [productName, setProductName] = useState(
        props.route.params.productName
    );
    const [quantity, setQuantity] = useState(props.route.params.quantity);

    // create one object to send to the api request
    const buildBody = () => {
        return {
            productName,
            quantity,
        };
    };

    // handle passing data from child to parent ... if time permits will convert to redux
    const inputHandler = (data, setState) => {
        setState(data);
        // setDisableSave(false);
    };

    const updateInventory = async () => {
        // validate input and if valid, update inventory
        let errList = validateInventoryInput();

        // if no errors, put
        if (errList.length === 0) {
            await stockPut(user, props.route.params._id, buildBody());
            props.navigation.pop();
        }
        // else alert user of errors
        else {
            alert(
                "Please fill out the following fields:\n" + errList.join(", ")
            );
        }
    };

    const validateInventoryInput = () => {
        const alertString = [];

        if (productName.length === 0) {
            alertString.push("Product Name");
        }

        if (quantity.length === 0) {
            alertString.push("Quantity");
        }

        return alertString;
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View>
                <Appbar style={styles.appbar}>
                    <Appbar.Action
                        icon={() => <Feather name="x" size={24} color="white" />}
                        onPress={() => props.navigation.pop()}
                    />

                    <Appbar.Content title="Edit Inventory" />

                    <TouchableOpacity
                        style={styles.save}
                        onPress={async () => {
                            await updateInventory();
                        }}
                    >
                        <Appbar.Content color="white" title="Save" />
                    </TouchableOpacity>
                </Appbar>

                <View style={styles.container}>
                    <View style={styles.input}>
                        <View style={styles.minWidth}>
                            <EditTextInput
                                initialValue={productName}
                                handler={inputHandler}
                                setState={setProductName}
                                title={"Product Name"}
                            />

                            <EditNumberInput
                                initialValue={quantity}
                                handler={inputHandler}
                                setState={setQuantity}
                                title={"Quantity"}
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
    },
    save: {
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
    deleteButton: {
        width: "100%",
        backgroundColor: "#343a40",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
});
