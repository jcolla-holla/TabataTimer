import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import Screen from './Screen'
import AppButton from './AppButton';

export default function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>            
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.grayMedium} style={styles.icon} /> }
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.grayMedium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible}  animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                </Screen>
            </Modal>
        </>
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
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1,
    }
})