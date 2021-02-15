import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

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
    const navigation = useNavigation()
    const [exercise, setExercise] = useState()
    const [exerciseArr, setExerciseArr] = useState([])
    const [numExercises, setNumExercises] = useState()
    const [roundDuration, setRoundDuration] = useState()
    const [breakDuration, setBreakDuration] = useState()

    return (
        <View>
            <AppTextInput icon="timer-sand" placeholder={"Prep Time"} keyboardType='number-pad'/>
            <AppTextInput icon="timer" placeholder={"Round Duration"} keyboardType='number-pad' onChangeText={(text) => setRoundDuration(text)}/>
            <AppTextInput icon="timer" placeholder={"Break Duration"} keyboardType='number-pad' onChangeText={(text) => setBreakDuration(text)}/>
            <AppTextInput icon="repeat" placeholder={"Rounds (number of exercises)"} keyboardType='number-pad' onChangeText={(text) => setNumExercises(text)}/>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>
            <View style={styles.startTabataContainer}>
                <AppButton disabled title="Start Tabata" onPress={() => navigation.navigate('Tabata')} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    startTabataContainer: {
        // top: 420, to figure out this spacing so that user can scroll down to button with 8+ exercises
        marginTop: 300,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
})