import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType="ascii-capable"
                    placeholder="Password"
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
                    <Text style={{ color: "blue" }}>
                        Don't have an account? Press here to register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
    },
    inputContainer: {
        width: "100%",
        backgroundColor: "#ccc",
        margin: 20,
        padding: 20,
        borderRadius: 8,
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        backgroundColor: "blue",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
    registerButton: {
        paddingVertical: 40,
    },
});
