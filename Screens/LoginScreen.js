import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

// screen that handles logging in the user
export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    placeholderTextColor={"white"}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType="ascii-capable"
                    placeholder="Password"
                    placeholderTextColor={"white"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={async () => {
                        await login(email, password);
                    }}
                >
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => {
                        navigation.navigate("Register");
                    }}
                >
                    <Text style={{ color: "#FFD700" }}>
                        Press here to register
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#36454f",
        alignItems: "center",
        padding: 20,
    },
    header: {
        marginTop: 100,
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
    },
    inputContainer: {
        width: "100%",
        borderColor: "#FFD700",
        margin: 20,
        padding: 20,
        borderBottomWidth: 2,
        borderRadius: 8,
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        backgroundColor: "#343a40",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
    registerButton: {
        paddingVertical: 40,
    },
});
