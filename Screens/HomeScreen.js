import React from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import { Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

// screen that contains the main home page users will be directed to when logged in
const HomeScreen = (props) => {
    const { logout } = React.useContext(AuthContext);
    const user = useSelector((state) => state.user);
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="logout"
                onPress={async () => {
                    await logout(user);
                }}
            ></Button>
            <Text>Welcome to the home page, {user.email}</Text>
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
