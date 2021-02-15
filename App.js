import React from 'react'
import WelcomeScreen from './app/screens/WelcomeScreen'
import HomeScreen from './app/screens/HomeScreen'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}