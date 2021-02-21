import React, {useState} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { uid } from 'uid'

import AppPicker from '../components/AppPicker'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

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
    const [exerciseArr, setExerciseArr] = useState([])
    const [prepTime, setPrepTime] = useState()
    const [numRounds, setNumRounds] = useState()
    const [roundDuration, setRoundDuration] = useState()
    const [breakDuration, setBreakDuration] = useState()
    const [numSets, setNumSets] = useState()

    const exerciseInputEles = []
    for (let i = 0; i < numSets; i++) {
        exerciseInputEles.push(<AppPicker key={uid()} selectedItem={exerciseArr[i]} onSelectItem={item => updateExercise(item, i)} items={exercises} icon="weight-lifter" placeholder={`Exercise ${i + 1}`} />)
    }

    const updateExercise = (exercise, idx) => {
        const newExerciseArr = [...exerciseArr];
        let newExercise = { ...newExerciseArr[idx] };
        newExercise = exercise
        newExerciseArr[idx] = newExercise;
        setExerciseArr(newExerciseArr);
    }

    return (
        <Screen>
            <View style={styles.navBar}>
                <Image style={styles.logo} source={require("../assets/tt-logo.png")} />
            </View>
            <AppTextInput icon="timer-sand" placeholder={"Prep Time"} keyboardType='number-pad' onChangeText={(text) => setPrepTime(text)}/>
            <AppTextInput icon="timer" placeholder={"Round Duration"} keyboardType='number-pad' onChangeText={(text) => setRoundDuration(text)}/>
            <AppTextInput icon="timer" placeholder={"Break Duration"} keyboardType='number-pad' onChangeText={(text) => setBreakDuration(text)}/>
            <AppTextInput icon="repeat" placeholder={"Number of Rounds"} keyboardType='number-pad' onChangeText={(text) => setNumRounds(text)}/>
            <AppTextInput icon="format-list-numbered" placeholder={"Number of Sets"} keyboardType='number-pad' onChangeText={(text) => setNumSets(text)}/>
            {exerciseInputEles}
            <View style={styles.startTabataContainer}>
                {!(prepTime && roundDuration && breakDuration && numRounds && numSets && exerciseArr.length > 0) && 
                    <View>
                        <Text style={styles.text}>Fill out all fields to start your Tabata Timer.</Text>
                    </View>
                }
                {(prepTime && roundDuration && breakDuration && numRounds && numSets && exerciseArr.length > 0) && <AppButton title="Start Tabata" onPress={() => navigation.navigate('Tabata', {numSets: numSets, prepTime: prepTime, numRounds: numRounds, roundDuration: roundDuration, breakDuration: breakDuration, exerciseArr: exerciseArr})} />}
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        alignItems: 'center',
        top: 10
    },
    logo: {
        width: 130,
        height: 80,
    },
    startTabataContainer: {
        // top: 420, to figure out this spacing so that user can scroll down to button with 8+ exercises
        marginTop: 300,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    text: {
        width: "100%", // this width might cause problems
        height: 20,
        bottom: 160,
        justifyContent: "center",
        alignItems: "center",
    }
})