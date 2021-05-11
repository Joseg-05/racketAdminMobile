import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

import { ordersPut } from "../../api/put";

import { EditTextInput } from "../EditTextInput";

export const OrderEditForm = (props) => {
    const user = useContext(UserContext);

    const [disableSave, setDisableSave] = useState(true);
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

    //handle passing data from child to parent ... if time permits will convert to redux
    const inputHandler = (data, setState) => {
        setState(data);
        setDisableSave(false);
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

    const updateOrder = async () => {
        await ordersPut(user, props.route.params._id, buildBody());
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
                <Appbar.Content title="Edit Order" />
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

                        <EditTextInput
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
