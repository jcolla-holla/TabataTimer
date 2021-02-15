import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {uid} from 'uid'

import colors from '../config/colors'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'


export default function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>            
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.grayMedium} style={styles.icon} /> }
                    <AppText style={styles.text}>{selectedItem ? selectedItem : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.grayMedium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible}  animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item => uid()}
                        renderItem={({item}) => <PickerItem
                            label={item}
                            onPress={() => {
                                setModalVisible(false)
                                onSelectItem(item)
                            }}
                        />}
                    />
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