import React from 'react';
import { View, Text } from 'react-native';

import AppTextInput from '../components/AppTextInput'

export default function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
            <AppTextInput
                placeholder="Burpees"
            ></AppTextInput>
        </View>
    )
}
