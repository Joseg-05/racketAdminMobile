import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { stockPut } from "../../api/put";
import { EditTextInput, EditNumberInput } from "../shared/TextInputs/EditInput";

export const InventoryEditForm = (props) => {
    const user = useSelector((state) => state.user);

    const [disableSave, setDisableSave] = useState(true);
    const [productName, setProductName] = useState(
        props.route.params.productName
    );
    const [quantity, setQuantity] = useState(props.route.params.quantity);

    // below doesnt work with null value if nothing is inputted
    // const [quantity, setQuantity] = useState(props.route.params.quantity);

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
        setDisableSave(false);
    };

    const updateInventory = async () => {
        await stockPut(user, props.route.params._id, buildBody());
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
