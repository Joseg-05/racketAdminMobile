import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/actions";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Appbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;


// screen that contains the main home page users will be directed to when logged in
const HomeScreen = (props) => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (

        <View style={styles.container}>
            <View style={styles.statusBar}></View>

            <StatusBar style="light" backgroundColor="#1e3d58" />

            <Appbar style={styles.appBar} >
                <Appbar.Content title="Home" />
                
                <Appbar.Action
                    icon={() => (
                        <Ionicons
                            name="exit"
                            size={24}
                            color="white"
                        />
                    )}
                    onPress={() => {
                        dispatch(logoutUser(user))
                    }}
                />
            </Appbar>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{color: 'white'}}>Welcome to the home page, {user.email}</Text>
            </View>
            
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#36454f",
    },
    statusBar: {
        width: "100%",
        height: STATUS_BAR_HEIGHT,
        backgroundColor: "#1e3d58",
    },
    appBar: {
        minWidth: "100%",
        backgroundColor: "#1e3d58",
        height: "9%",
    },
    button: {
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#1e3d58',
        fontSize: 20,
        padding: 20,
    },
});

export default HomeScreen;
