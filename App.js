import React, {useState} from 'react'
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'
import HomeScreen from './app/screens/HomeScreen'
import AppPicker from './app/components/AppPicker'

const exercises = [
  {label: "Burpees", value: 1},
  {label: "Squats", value: 2},
  {label: "Push Ups", value: 3}
]

export default function App() {
  const [exercise, setExercise] = useState()


  // return <HomeScreen />
  return <AppPicker selectedItem={exercise} onSelectItem={item => setExercise(item)} items={exercises} icon="weight-lifter" placeholder="Exercise 1"></AppPicker>

}