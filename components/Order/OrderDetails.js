import React from "react";
import { View, Text } from "react-native";

export const OrderDetails = ({ orderDetails }) => {
    const renderDetails = Object.entries(orderDetails).map(([key, value]) => {
        return (
            <View>
                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Text>{key}</Text>

                    <Text>{value}</Text>
                </View>
            </View>
        );
    });
    return renderDetails;
};
