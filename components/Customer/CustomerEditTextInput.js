import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const EditCustomerTextInput = ({ initialValue, handler, setState, title }) => {
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
                value={initialValue}
                style={styles.textInput}
                onChangeText={(val) => {
                    handler(val, setState);
                }}
            />
            </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        borderColor: "#FFD700",
        color: "#FFD700",
        backgroundColor: "#36454f",
        fontSize: 20,
        textAlign: "center",
    },
});




