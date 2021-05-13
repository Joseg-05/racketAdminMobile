import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export const EditHeaderBar = ({
    navigation,
    saveHandler,
    title,
    operationTitle,
}) => {
    return (
        <Appbar
            style={{
                minWidth: "100%",
                backgroundColor: "#1e3d58",
            }}
        >
            <Appbar.Action
                icon={() => <Feather name="x" size={24} color="white" />}
                onPress={() => navigation.pop()}
            />
            <Appbar.Content title={title} />
            <TouchableOpacity
                style={{
                    marginTop: 14,
                    marginRight: 10,
                }}
                disabled={false}
                onPress={async () => {
                    await saveHandler();
                }}
            >
                <Appbar.Content color={"white"} title={operationTitle} />
            </TouchableOpacity>
        </Appbar>
    );
};
