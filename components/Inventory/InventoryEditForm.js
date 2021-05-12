import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import { stockPut } from "../../api/put";

import { EditTextInput } from "../EditTextInput";

export const InventoryEditForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
    const [productName, setProductName] = useState(
        props.route.params.productName
    );
    const [quantity, setQuantity] = useState(
        props.route.params.quantity.toString()
    );

    console.log("_id: " + props.route.params._id);

    // handle passing data from child to parent ... if time permits will convert to redux
    const inputHandler = (data, setState) => {
        setState(data);
        setDisableSave(false);
    };

    // create one object to send to the api request
    const buildBody = () => {
        return {
            productName,
            quantity,
        };
    };

    const updateInventory = async () => {
        await stockPut(user, props.route.params._id, buildBody());
        console.log("_id: " + props.route.params._id);
        props.navigation.pop();
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
                <Appbar.Content title="Edit Inventory" />
                <TouchableOpacity
                    style={{
                        marginTop: 14,
                        marginRight: 10,
                    }}
                    disabled={disableSave}
                    onPress={async () => {
                        await updateInventory();
                    }}
                >
                    <Appbar.Content
                        color={disableSave ? "gray" : "white"}
                        title="Save"
                    />
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
                        <EditTextInput
                            initialValue={productName}
                            handler={inputHandler}
                            setState={setProductName}
                            title={"Product Name"}
                        />

                        <EditTextInput
                            initialValue={quantity}
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
    container: {
        flexDirection: "column",
        flex: 1,
    },
});
