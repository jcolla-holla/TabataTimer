import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import AppPicker from '../components/AppPicker'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';

// improvement: use a timer incrementer picker thing instead: https://www.npmjs.com/package/react-native-numeric-input

const exercises = [
    { label: "Burpees", value: 1 },
    { label: "Squats", value: 2 },
    { label: "Push Ups", value: 3 }
]

export default function HomeScreen() {
    const [exercise, setExercise] = useState()
    const [exerciseArr, setExerciseArr] = useState([])
    const [numExercises, setNumExercises] = useState()
    const [roundDuration, setRoundDuration] = useState()
    const [breakDuration, setBreakDuration] = useState()

    return (
        <View>
            <AppTextInput icon="timer-sand" placeholder={"Prep Time"}/>
            <AppTextInput icon="timer" placeholder={"Round Duration"}/>
            <AppTextInput icon="timer" placeholder={"Break Duration"}/>
            <AppTextInput icon="repeat" placeholder={"Rounds (number of exercises)"} keyboardType='number-pad' onChangeText={(text) => setNumExercises(text)}/>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <View style={styles.logoContainer}>
                <AppButton title="Start Tabata" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logoContainer: {
        top: 420,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
})