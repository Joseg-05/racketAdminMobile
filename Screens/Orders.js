import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Orders = (props) => {
    return (
        <View style={styles.container}>
            <Text>Orders page</Text>
            <Button
                title="Navigate to Home Page"
                onPress={() => props.navigation.navigate("Home")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Orders;
