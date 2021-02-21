import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View} from 'react-native'

import Screen from '../components/Screen'
import Constants from "expo-constants"

export default function Tabata({route}) {
    const [timeRemaining, setTimeRemaining] = useState(route.params.prepTime)
    const [phase, setPhase] = useState("prep")
    const [numExercisesCompleted, setNumExercisesCompleted] = useState(0)
    const [roundsCompleted, setRoundsCompleted] = useState(0)

    useEffect(() => {
        if (numExercisesCompleted <= route.params.exerciseArr.length) {
            // in a round
            if(timeRemaining > 0)
                setTimeout(() => {
                    setTimeRemaining(timeRemaining - 1)
                }, 100)
            else if (numExercisesCompleted === 0) {
                setNumExercisesCompleted(numExercisesCompleted + 1)
                setPhase("round")
                setTimeRemaining(route.params.roundDuration)
            }
            else if (phase === "break") {
                setPhase("round")
                setTimeRemaining(route.params.roundDuration)
            } else if (phase === "round") {
                setNumExercisesCompleted(numExercisesCompleted + 1)
                setPhase("break")
                setTimeRemaining(route.params.breakDuration)
            }
        } else if (roundsCompleted <= route.params.numRounds) {
            // start a new round or end if all rounds complete
            if (roundsCompleted === route.params.numRounds - 1) {
                setPhase("end")
            } else {
                setRoundsCompleted(roundsCompleted + 1)
                setNumExercisesCompleted(0)
                setTimeRemaining(route.params.prepTime)
                setPhase("prep")
            }
        } else {
            setPhase("end")
        }
    }, [timeRemaining])


    return (
        <View>
            <View style={styles.timerContainer}>

                <Text>Exercises Completed: {numExercisesCompleted}</Text>
                <Text>Rounds Completed: {roundsCompleted}</Text>
                
                {phase !== "end" && 
                    <>
                        <Text>Phase: {phase}</Text>
                    <Text>Exercise: {numExercisesCompleted === 0 ? route.params.exerciseArr[0] : route.params.exerciseArr[numExercisesCompleted - 1]}</Text>
                        <Text style={styles.timer}>{timeRemaining}</Text>
                    </>
                }

                {phase === "end" && <Text style={styles.done}>Done!</Text>}

            </View>
            <View style={styles.configContainer}>
                <Text>Rounds: {route.params.numRounds}</Text>
                <Text>Prep Time: {route.params.prepTime}</Text>
                <Text>Round Duration: {route.params.roundDuration}</Text>
                <Text>Break Duration: {route.params.breakDuration}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    },
    timer: {
        fontSize: 200,
        fontWeight: "bold"
    },
    done: {
        fontSize: 80,
        fontWeight: "bold"
    },
    timerContainer: {
        backgroundColor: "green",
        alignItems: "center"
    },
    configContainer: {
        backgroundColor: "dodgerblue",
        display: "flex"
        // justifyContent: "flex-end",
        // alignItems: "center"
    }
})
