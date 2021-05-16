import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { ordersPut } from "../../api/put";
import { EditTextInput, EditNumberInput } from "../shared/TextInputs/EditInput";
import DatePicker from "react-native-date-picker";

export const OrderEditForm = (props) => {
    const user = useSelector((state) => state.user);

    const [model, setModel] = useState(props.route.params.model);
    const [racketBrand, setRacketBrand] = useState(
        props.route.params.racketBrand
    );
    const [recTension, setRecTension] = useState(props.route.params.recTension);
    const [stringPattern, setStringPattern] = useState(
        props.route.params.stringPattern
    );
    const [desiredTension, setDesiredTension] = useState(
        props.route.params.desiredTension
    );
    const [stringType, setStringType] = useState(props.route.params.stringType);

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

    //handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data);
    };

    const updateOrder = async () => {
        // validate input and if valid, update order
        let errList = validateOrderInput();

        if (errList.length === 0) {
            await ordersPut(user, props.route.params._id, buildBody());
            props.navigation.pop();
        } else {
            alert(
                "Please fill out the following fields:\n" + errList.join(", ")
            )
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
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View>
                <Appbar style={styles.appbar} >
                    <Appbar.Action
                        icon={() => <Feather name="x" size={24} color="white" />}
                        onPress={() => props.navigation.pop()}
                    />

                    <Appbar.Content title="Edit Order" />

                    <TouchableOpacity
                        style={styles.save}
                        onPress={async () => {
                            await updateOrder();
                        }}
                    >
                        <Appbar.Content color="white" title="Save" />
                    </TouchableOpacity>
                </Appbar>

                <View style={styles.container} >
                    <View style={styles.input} >
                        <View style={styles.minWidth}>
                            <EditTextInput
                                initialValue={model}
                                handler={inputHandler}
                                setState={setModel}
                                title={"Model"}
                            />

                            <EditTextInput
                                initialValue={racketBrand}
                                handler={inputHandler}
                                setState={setRacketBrand}
                                title={"Racket Brand"}
                            />

                            <EditTextInput
                                initialValue={recTension}
                                handler={inputHandler}
                                setState={setRecTension}
                                title={"Rec. Tension Range"}
                            />

                            <EditTextInput
                                initialValue={stringPattern}
                                handler={inputHandler}
                                setState={setStringPattern}
                                title={"String Pattern"}
                            />

                            <EditNumberInput
                                initialValue={desiredTension}
                                handler={inputHandler}
                                setState={setDesiredTension}
                                title={"Desired Tension"}
                            />

                            <EditTextInput
                                initialValue={stringType}
                                handler={inputHandler}
                                setState={setStringType}
                                title={"String Type"}
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
