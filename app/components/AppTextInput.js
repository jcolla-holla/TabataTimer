import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon}/>}
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 100,
        backgroundColor: colors.grayLight,
        borderRadius: 6,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    }
})