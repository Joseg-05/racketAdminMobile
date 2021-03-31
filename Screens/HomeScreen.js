import React from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
    const { logout } = React.useContext(AuthContext);
    const user = React.useContext(UserContext);
    console.log(user);
    return (
        <View style={styles.container}>
            <Button
                title="logout"
                onPress={async () => {
                    await logout();
                }}
            ></Button>
            <Text>Welcome to the home page</Text>
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

export default HomeScreen;
