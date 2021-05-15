import React from "react";
import { Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/actions";

// screen that contains the main home page users will be directed to when logged in
const HomeScreen = (props) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="logout"
                onPress={() => {
                    dispatch(logoutUser(user));
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
