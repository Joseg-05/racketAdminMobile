import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";

import { UserContext } from "../context/UserContext";

export const OrderForm = (props) => {
    const user = useContext(UserContext);
    const [orderDetails, setOrderDetails] = useState({
        ...props.route.params,
    });
    useEffect(() => {
        console.log(orderDetails);
    });
    return (
        <View style={styles.container}>
            <View
                style={{
                    minWidth: "90%",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                }}
            >
                <View style={{ minWidth: "90%" }}>
                    <TextInput
                        mode="flat"
                        label={
                            <Text style={{ fontSize: 25, color: "#FFD700" }}>
                                Model
                            </Text>
                        }
                        underlineColor="#FFD700"
                        placeholderTextColor="white"
                        selectionColor="white"
                        theme={{
                            colors: { primary: "#FFD700", text: "white" },
                        }}
                        value={orderDetails.model}
                        style={styles.textInput}
                    />
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
