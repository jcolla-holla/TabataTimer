import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'

import Screen from '../components/Screen'

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
        <Screen>
            <View style={styles.navBar}>
                <Image style={styles.logo} source={require("../assets/tt-logo.png")} />
            </View>
            <View style={styles.timerContainer}>

                {phase !== "end" && 
                    <>
                        <View style={styles.exercisesContainer}>
                            <Text style={styles.text}>Exercises Done: {numExercisesCompleted} / {route.params.exerciseArr.length}</Text>
                            <Text style={styles.text}>Rounds Done: {roundsCompleted} / {route.params.numRounds}</Text>
                        </View>
                        <Text style={styles.text}>Phase: {phase}</Text>
                        <Text style={styles.text}>Exercise: {numExercisesCompleted === 0 ? route.params.exerciseArr[0] : route.params.exerciseArr[numExercisesCompleted - 1]}</Text>
                        <Text style={styles.timer}>{timeRemaining}</Text>
                    </>
                }

                {phase === "end" && <Text style={styles.done}>Done!</Text>}

            </View>

            <View style={styles.timesContainer}>
                <View style={styles.timeTitleContainer}>
                    <Text style={styles.timeTitle}>Times</Text>
                </View>
                <View style={styles.timesSetContainer}>
                    <Text style={styles.text}>Prep: {route.params.prepTime}</Text>
                    <Text style={styles.text}>Round: {route.params.roundDuration}</Text>
                    <Text style={styles.text}>Break: {route.params.breakDuration}</Text>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    navBar: {
        alignItems: 'center',
        top: 10
    },
    logo: {
        width: 130,
        height: 80,
    },
    timerContainer: {
        alignItems: "center",
        height: 300,
        top: 20,
        bottom: 20
    },
    exercisesContainer: {
        alignItems: "center",
        paddingTop: 20
    },
    timer: {
        fontSize: 200,
        fontWeight: "bold",
        bottom: 20,
        top: 20
    },
    done: {
        fontSize: 100,
        top: 40,
        fontWeight: "bold",
    },
    timeTitleContainer: {
        fontSize: 30,
        fontWeight: "bold"
    }, 
    timeTitle: {
        fontSize: 30,
        fontWeight: "bold"
    }, 
    timesSetContainer: {
        padding: 20
    },
    timesContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        padding: 100
    },
    roundsContainer: {
        alignItems: 'center',
        padding: 60
    },
    roundsText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20
    }
})
