import React from "react";

export const EditTextInput = () => {
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
                        Model
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
                value={orderDetails.model}
                style={styles.textInput}
                onChangeText={(val) => {
                    setDisableSave(false);
                    setOrderDetails((current) => {
                        return { ...current, model: val };
                    });
                }}
            />
        </View>
    );
};
