import React from 'react';
import { View, Text } from 'react-native';

import AppTextInput from '../components/AppTextInput'

export default function HomeScreen() {
    return (
        <View>
            <AppTextInput
                placeholder="Burpees"
            ></AppTextInput>
            <AppTextInput
                placeholder="Squats"
            ></AppTextInput>
            <AppTextInput
                placeholder="Lunges"
            ></AppTextInput>
        </View>
    )
}
