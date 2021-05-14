import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Platform, View } from 'react-native'
import Constants from 'expo-constants'
import { InventoryEditForm } from '../../components/Inventory/InventoryEditForm'

const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? 20 : Constants.statusBarHeight

export const InventoryEditScreen = (props) => {
    useEffect(() => {}, [props])
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    height: STATUS_BAR_HEIGHT + 20,
                    backgroundColor: '#1e3d58',
                }}
            ></View>
            <InventoryEditForm {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#36454f',
        justifyContent: 'center',
    }
})