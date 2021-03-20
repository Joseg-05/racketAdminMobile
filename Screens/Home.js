import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button
                title="Navigate to Orders Page"
                onPress={() => props.navigation.navigate("Orders")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Home;
