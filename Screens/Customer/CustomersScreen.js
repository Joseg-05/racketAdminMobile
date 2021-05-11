import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    PlatForm,
} from "react-native";
import { UserContext } from "../../context/UserContext";
import { Swipeable } from "react-native-gesture-handler";
import { CustomerRow } from "../../components/Customer/CustomerRow";
import { createCustomers } from "../../api/post";
import { customersGet } from "../../api/get";
import Constants from "expo-constants";
import { Appbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const STATUS_BAR_HEIGHT =
    Platform.OS === "ios" ? 20 : Constants.statusBarHeight;

// screen that will handle creating and viewing customers
const CustomersScreen = (props) => {
    const user = React.useContext(UserContext);

    const [customers, setCustomers] = useState([]);

    //on mount get customers associated with user
    useEffect(() => {
        async function getCustomers() {
            const data = await customersGet(user);
            setCustomers(data.data);
        }
        getCustomers();
    }, []);

    async function createCustomer() {
        await createCustomers(user);
    }

    const LeftAction = (progress, dragX) => {
        return (
            <View
                style={{
                    fontSize: 20,
                    color: "white",
                    backgroundColor: "#FFD700",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        padding: 20,
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    Completed
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#1e3d58",
                }}
            ></View>
            <StatusBar style="light" backgroundColor="#1e3d58" />
            <Appbar
                style={{
                    minWidth: "100%",
                    backgroundColor: "#1e3d58",
                    height: "9%",
                }}
            >
                <Appbar.Content title="Customers" />
                <Appbar.Action
                    icon={() => (
                        <Ionicons
                            name="add-circle-outline"
                            size={24}
                            color="white"
                        />
                    )}
                    onPress={() => {
                        props.navigation.navigate("CustomerAddScreen");
                    }}
                />
            </Appbar>
            <View style={{ width: "100%", flex: 1 }}>
                <FlatList
                    data={customers}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate(
                                        "CustomerEditScreen",
                                        {
                                            itemData: item,
                                        }
                                    );
                                }}
                            >
                                <Swipeable renderLeftActions={LeftAction}>
                                    <CustomerRow customerDetails={item} />
                                </Swipeable>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
});

export default CustomersScreen;
