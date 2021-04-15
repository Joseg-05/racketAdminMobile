import React from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

// screen that contains the main home page users will be directed to when logged in
const HomeScreen = (props) => {
    const { logout } = React.useContext(AuthContext);
    const user = React.useContext(UserContext);

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="logout"
                onPress={async () => {
                    await logout(user);
                }}
            ></Button>
            <Text>Welcome to the home page, {user.user.email}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScreen;
