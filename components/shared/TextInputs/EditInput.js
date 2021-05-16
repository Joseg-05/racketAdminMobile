import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const EditTextInput = ({ initialValue, handler, setState, title }) => {
    return (
        <View>
            <TextInput
                mode="flat"
                label={
                    <Text
                        style={{
                            fontSize: 25,
                            color: "#FFD700",
                        }}
                    >
                        {title}
                    </Text>
                }
                underlineColor="#FFD700"
                placeholderTextColor="white"
                selectionColor="white"
                theme={{
                    colors: {
                        primary: "#FFD700",
                        text: "white",
                    },
                }}
                value={initialValue}
                style={styles.textInput}
                onChangeText={(val) => {
                    handler(val, setState);
                }}
            />
        </View>
    );
};

export const EditNumberInput = ({ initialValue, handler, setState, title }) => {
    return (
        <View>
            <TextInput
                keyboardType="numeric"
                mode="flat"
                label={
                    <Text
                        style={{
                            fontSize: 25,
                            color: "#FFD700",
                        }}
                    >
                        {title}
                    </Text>
                }
                underlineColor="#FFD700"
                placeholderTextColor="white"
                selectionColor="white"
                theme={{
                    colors: {
                        primary: "#FFD700",
                        text: "white",
                    },
                }}
                value={initialValue.toString()}
                style={styles.textInput}
                onChangeText={(val) => {
                    handler(val, setState);
                }}
            />
        </View>
    );
};

export const EditDateInput = ({ handler, setState }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        handler(currentDate, setState);
    };

    return (
        <View style={styles.dateInputContainer}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => setShow(true)}>
                    <View
                        style={{
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                            ...styles.dateInput,
                        }}
                    >
                        <AntDesign name="calendar" size={30} color="#FFD700" />
                    </View>
                </TouchableOpacity>

                <Text
                    style={{
                        color: "#FFD700",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 30,
                        borderBottomWidth: 1,
                        borderColor: "#FFD700",
                    }}
                >
                    {date.toString().slice(0, 10)}
                </Text>
            </View>
            <View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        borderColor: "#FFD700",
        color: "#FFD700",
        backgroundColor: "#36454f",
        fontSize: 20,
        textAlign: "center",
    },
    dateInputContainer: {
        flexDirection: "row",
        padding: 10,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    dateTitle: {
        fontSize: 30,
        color: "#FFD700",
        textAlign: "center",
    },
    dateInput: {
        color: "#FFD700",
        backgroundColor: "#343a40",
        padding: 5,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 30,
    },
});
