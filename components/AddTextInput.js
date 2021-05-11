import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";

export const AddTextInput = ({ handler, title, setState }) => {
    return (
        <View>
            <TextInput
                mode="flat"
                label={
                    <Text
                        style={{
                            fontSize: 25,
                            color: "#FFD700",
                        }}
                    >
                        {title}
                    </Text>
                }
                underlineColor="#FFD700"
                placeholderTextColor="white"
                selectionColor="white"
                theme={{
                    colors: {
                        primary: "#FFD700",
                        text: "white",
                    },
                }}
                style={styles.textInput}
                onChangeText={(val) => {
                    handler(val, setState);
                }}
            />
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
