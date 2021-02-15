import React from 'react'
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'
import HomeScreen from './app/screens/HomeScreen'
import AppPicker from './app/components/AppPicker'

export default function App() {
  // return <HomeScreen />
  return <AppPicker icon="apps" placeholder="Exercise 1"></AppPicker>

}