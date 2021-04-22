import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { UserContext } from "../../context/UserContext";
import { Swipeable } from "react-native-gesture-handler";
import { CustomerRow } from "../../components/CustomerRow";
import { createCustomers } from "../../api/post";
import { customersGet } from "../../api/get";
import Constants from "expo-constants";

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
        <SafeAreaView style={styles.container}>
            <FlatList
                data={customers}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate(
                                    "CustomerDetailsScreen",
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
            <Button
                title="push to create test"
                onPress={async () => {
                    await createCustomer();
                }}
            ></Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: "center",
        backgroundColor: "#36454f",
    },
});

export default CustomersScreen;
