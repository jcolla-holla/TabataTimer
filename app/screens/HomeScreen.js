import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { uid } from 'uid'

import AppPicker from '../components/AppPicker'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';

// improvement: use a timer incrementer picker thing instead: https://www.npmjs.com/package/react-native-numeric-input


// to do: update this with a list of real exercises in alphabetical order (better if searchable also)
const exercises = [
    "Burpees",
    "Squats",
    "Push Ups",
    "Jumping Jacks",
    "Lunges",
    "Plank",
    "Pull Ups"
]

export default function HomeScreen() {
    const navigation = useNavigation()
    const [exercise, setExercise] = useState()
    const [exerciseArr, setExerciseArr] = useState([])
    const [numExercises, setNumExercises] = useState()
    const [roundDuration, setRoundDuration] = useState()
    const [breakDuration, setBreakDuration] = useState()

    const exerciseInputEles = []
    for (let i = 0; i < numExercises; i++) {
        exerciseInputEles.push(<AppPicker id={uid()} selectedItem={exerciseArr[i]} onSelectItem={item => updateExercise(item, i)} items={exercises} icon="weight-lifter" placeholder={`Exercise ${i + 1}`} />)
    }

    const updateExercise = (exercise, idx) => {
        const newExerciseArr = [...exerciseArr];
        let newExercise = { ...newExerciseArr[idx] };
        newExercise = exercise
        newExerciseArr[idx] = newExercise;
        setExerciseArr(newExerciseArr);
    }

    return (
        <View>
            <AppTextInput icon="timer-sand" placeholder={"Prep Time"} keyboardType='number-pad'/>
            <AppTextInput icon="timer" placeholder={"Round Duration"} keyboardType='number-pad' onChangeText={(text) => setRoundDuration(text)}/>
            <AppTextInput icon="timer" placeholder={"Break Duration"} keyboardType='number-pad' onChangeText={(text) => setBreakDuration(text)}/>
            <AppTextInput icon="repeat" placeholder={"Rounds (number of exercises)"} keyboardType='number-pad' onChangeText={(text) => setNumExercises(text)}/>
            {exerciseInputEles}
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