import React, { useContext, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { UserContext } from '../../context/UserContext'
import { stockPost } from '../../api/post'
import { AddTextInput, AddNumberInput } from '../AddTextInput'


export const InventoryAddForm = (props) => {
    const user = useContext(UserContext)

    const [disableSave, setDisableSave] = useState(true);
    const [productName, setProductName] = useState("")
    const [quantity, setQuantity] = useState("")

    // create one object to send to api request
    const buildBody = () => {
        return {
            productName,
            quantity,
        }
    }

    // handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data)
        setDisableSave(false)
    }

    const createInventory = async () => {
        await stockPost(user, buildBody())
        props.navigation.pop()
    }

    return (
        <View>
            <Appbar
                style={{
                    minWidth: '100%',
                    backgroundColor: '#1e3d58',
                }}
            >
                <Appbar.Action
                    icon={() => <Feather name='x' size={24} color='white' />}
                    onPress={() => props.navigation.pop()}
                />
                <Appbar.Content title='Add Inventory' />
                <TouchableOpacity
                    style={{
                        marginTop: 14,
                        marginRight: 10,
                    }}
                    disabled={disableSave}
                    onPress={async () => {
                        await createInventory()
                    }}
                >
                    <Appbar.Content
                        color={disableSave ? 'gray' : 'white'} 
                        title='Add'
                    />
                </TouchableOpacity>
            </Appbar>

            <View style={styles.container} >
                <View style={styles.input} >
                    <View style={styles.minWidth}>
                        <AddTextInput
                            handler={inputHandler}
                            setState={setProductName}
                            title={"Product Name"}
                        />

                        <AddNumberInput
                            handler={inputHandler}
                            setState={setQuantity}
                            title={"Quantity"}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    input: {
        minWidth: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    minWidth: {
        minWidth: '100%',
    },
})