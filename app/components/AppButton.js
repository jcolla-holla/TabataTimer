import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'


export default function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "80%",
        height: 70,
        backgroundColor: colors.primary,
        bottom: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.secondary,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        borderRadius: 6,
        elevation: 20
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 24
    }
})