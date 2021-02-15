import React, {useState, useEffect} from 'react'
import {Text} from 'react-native'

import Screen from '../components/Screen'

export default function Tabata({route}) {
    const [timeRemaining, setTimeRemaining] = useState(route.params.prepTime)

    useEffect(() => {
        if(timeRemaining > 0)
            setTimeout(() => {
                if (timeRemaining > 0) setTimeRemaining(timeRemaining - 1)
                else console.log('next')// move to the next stage (handle in another function)
            }, 1000)
    }, [timeRemaining])


    return (
        <Screen>
            <Text>Rounds: {route.params.numRounds}</Text>
            <Text>Prep Time: {route.params.prepTime}</Text>
            <Text>Round Duration: {route.params.roundDuration}</Text>
            <Text>Break Duration: {route.params.breakDuration}</Text>
            <Text>Exercises: {route.params.exerciseArr}</Text>
            <Text>{timeRemaining}</Text>
        </Screen>
    )
}
