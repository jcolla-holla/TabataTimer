import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { uid } from 'uid'

import AppPicker from '../components/AppPicker'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

// improvement: use a timer incrementer picker thing instead: https://www.npmjs.com/package/react-native-numeric-input

const exercises = [
    "Hand - Release Push Ups",
    "Plyo Push Ups",
    "Russian Twists",
    "Single - Leg Burpees",
    "Supermans with Lateral Raises",
    "Lateral Lunges with Hops",
    "Tuck - Ups",
    "Mountain Climbers",
    "Plank Jacks",
    "Squat Thrusts",
    "Plank Ups",
    "Flutter Kicks",
    "Star Jumps",
    "Forearm Planks",
    "Air Squats",
    "Split Squat Jumps",
    "Jumping Jacks",
    "Jump Lunge",
    "Butt Kicks",
    "Burpie Twister with Push Up",
    "Side Plank",
    "High Knees",
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
            <ScrollView>
                <View style={styles.navBar}>
                    <Image style={styles.logo} source={require("../assets/tt-logo.png")} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Fill out all fields to start your Tabata Timer.</Text>
                </View>
                <View style={{top: -80}}>
                    <AppTextInput icon="timer-sand" placeholder={"Prep Time"} keyboardType='number-pad' onChangeText={(text) => setPrepTime(text)}/>
                    <AppTextInput icon="timer" placeholder={"Round Duration"} keyboardType='number-pad' onChangeText={(text) => setRoundDuration(text)}/>
                    <AppTextInput icon="timer" placeholder={"Break Duration"} keyboardType='number-pad' onChangeText={(text) => setBreakDuration(text)}/>
                    <AppTextInput icon="repeat" placeholder={"Number of Rounds"} keyboardType='number-pad' onChangeText={(text) => setNumRounds(text)}/>
                    <AppTextInput icon="format-list-numbered" placeholder={"Number of Sets"} keyboardType='number-pad' onChangeText={(text) => setNumSets(text)}/>
                    {exerciseInputEles}
                </View>
                <View style={styles.startTabataContainer}>
                    {(prepTime !== undefined && roundDuration !== undefined && breakDuration !== undefined && numRounds !== undefined && numSets !== undefined && exerciseArr.length > 0) && <AppButton title="Start Tabata" onPress={() => navigation.navigate('Tabata', {numSets: numSets, prepTime: prepTime, numRounds: numRounds, roundDuration: roundDuration, breakDuration: breakDuration, exerciseArr: exerciseArr})} />}
                </View>
            </ScrollView>
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
        marginTop: 140,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    text: {
        height: 40,
        top: 40,
    }
})