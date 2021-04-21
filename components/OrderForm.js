import React, { useEffect } from "react";
import { View, Text, TextInput } from "react-native";

import { ordersPut } from "../api/put";
import { UserContext } from "../context/UserContext";

export const OrderForm = (props) => {
    const user = React.useContext(UserContext);
    useEffect(() => {});
    return (
        <View>
            <Text>{props.route.params.racketBrand}</Text>
        </View>
    );
};
