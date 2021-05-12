import React, { useEffect, useContext, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { UserContext } from '../../context/UserContext'
// import { stockPost } from '../../api/post'
import { AddTextInput } from '../AddTextInput'
import { customersGet } from '../../api/get'

export const InventoryAddForm = (props) => {
    const user = useContext(UserContext)

    const [productName, setProductName] = useState("")
    const [quantity, setQuantity] = useState("")

    // handle passing data from child to parent
    const inputHandler = (data, setState) => {
        setState(data)
    }

    // create one object to send to api request
    const buildBody = () => {
        return {
            productName,
            quantity,
        }
    }

    const createInventory = async () => {
        // await stockPost(user, buildBody())
    }

    useEffect(() => {
        async function getCustomers() {
            const data = await customersGet(user)
            setCustomers(data.data)
        }
        getCustomers()
    }, [])


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
                <Appbar.Content title="Add Inventory" />
                <TouchableOpacity
                    style={{
                        marginTop: 14,
                        marginRight: 10,
                    }}
                    disabled={false}
                    onPress={async () => {
                        await createInventory()
                    }}
                >
                    <Appbar.Content color={'white'} title='Add Inventory' />
                </TouchableOpacity>
            </Appbar>

            <View style={styles.container} >
                <View
                    style={{
                        minWidth: '100%',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View style={{ minWidth: '100%' }}>
                        <AddTextInput
                            handler={inputHandler}
                            setState={setProductName}
                            title={"Product Name"}
                        />

                        <AddTextInput
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
    }
})