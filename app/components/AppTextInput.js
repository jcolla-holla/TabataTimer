import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({icon, placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={{marginRight: 10}} name={icon} color={colors.grayMedium} size={20}/>}
            <TextInput style={defaultStyles.text} placeholder={placeholder} {...otherProps}/>
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
        borderColor: colors.grayMedium,
        borderTopWidth: 1,
        borderBottomWidth: 1
    }
})