import React, { useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
/* Screen that handles Registration */
export const RegistrationScreen = ({ navigation }) => {
    const { register } = React.useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            {/* the back button... will use icon from an icon library later */}
            <View style={styles.backButtonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={styles.backButton}>Go Back To Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Registration</Text>

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
                    style={styles.registerButton}
                    onPress={async () => {
                        await register(email, password);
                        navigation.pop();
                    }}
                >
                    <Text style={{ color: "white" }}>Register</Text>
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
    registerButton: {
        width: "100%",
        backgroundColor: "purple",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        marginTop: 20,
    },
    backButtonContainer: {
        marginTop: 20,
    },
    backButton: {
        color: "purple",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 20,
    },
});
