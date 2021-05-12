import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export const InventoryRow = ({ inventoryDetails }) => {
    // const [date, setDate] = useState(inventoryDetails.dueDate)

    // useEffect(() => {
    //     const formatDate = new Date(date)
    //     setDate(` ${formatDate.getMonth()}/${formatDate.getDate()} `)
    //     console.log()
    // }, [])

    return (
        <View style={styles.inventoryContainer} >
            <View>
                <Text style={styles.racketBrand} >
                    {`${inventoryDetails.productName}`}
                </Text>
            </View>
            <View>
                <Text style={styles.racketBrand}>
                    {`x${inventoryDetails.quantity}`}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    inventoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#36454f',
    },
    racketBrand: {
        color: 'white',
        fontSize: 20,
        padding: 20,
    },
})