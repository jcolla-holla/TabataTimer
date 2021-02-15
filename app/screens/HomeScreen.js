import React, {useState} from 'react';
import { View } from 'react-native';

import AppPicker from '../components/AppPicker'

const exercises = [
    { label: "Burpees", value: 1 },
    { label: "Squats", value: 2 },
    { label: "Push Ups", value: 3 }
]

export default function HomeScreen() {
    const [exercise, setExercise] = useState()

    return (
        <View>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
        </View>
    )
}
