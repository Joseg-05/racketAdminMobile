import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export const OrderRow = ({ orderDetails }) => {
    const [date, setDate] = useState(orderDetails.dueDate);

    useEffect(() => {
        const formatDate = new Date(date);
        setDate(` ${formatDate.getMonth()}/${formatDate.getDate()}`);
        console.log();
    }, []);

    return (
        <View style={styles.orderContainer}>
            <View>
                <Text style={styles.racketBrand}>
                    {`${orderDetails.racketBrand} ${orderDetails.model}`}
                </Text>
            </View>
            <View>
                <Text style={styles.racketBrand}>{date}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#36454f",
    },
    racketBrand: {
        color: "white",
        fontSize: 20,
        padding: 20,
    },
});
