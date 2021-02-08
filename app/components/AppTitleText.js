import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

export default function AppTitleText ({children}) {
    return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial"
    }
})