import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { UserContext } from "../context/UserContext";

import { createCustomers } from "../api/post";
import { customersGet } from "../api/get";
import axios from "axios";
// screen that will handle creating and viewing customers
const CustomersScreen = (props) => {
    const user = React.useContext(UserContext);

    const [customers, setCustomers] = useState([]);
    const [reload, setReload] = useState([]);
    let x = 1;
    //on mount get customers associated with user
    useEffect(() => {
        async function getCustomers() {
            const data = await customersGet(user);
            setCustomers(data.data);
        }
        getCustomers();
    }, [reload]);

    async function createCustomer() {
        await createCustomers(user);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Customers page</Text>
            {customers.map((e) => {
                return <Text>{e.name}</Text>;
            })}
            <Button
                title="push to create test"
                onPress={async () => {
                    await createCustomer();
                    setReload((reload) => !reload);
                }}
            ></Button>
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

export default CustomersScreen;
