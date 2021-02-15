 import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import colors from '../config/colors'


export default function PickerItem({label, onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial",
        padding: 20,
    }
})

 