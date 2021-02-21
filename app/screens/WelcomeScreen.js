import React from 'react';
import { ImageBackground, StyleSheet, View, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Constants from "expo-constants"


import AppButton from '../components/AppButton'
import Screen from '../components/Screen'

const image = { uri: "https://images.unsplash.com/photo-1580051745102-d33599f86c69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=608&q=80"}

function WelcomeScreen() {
    const navigation = useNavigation()

    return (
        <ImageBackground 
            blurRadius={.5}
            style={styles.background}
            source={image}
        >
            <View style={styles.navBar}>
                <Image style={styles.logo} source={require("../assets/tt-logo.png")} />
            </View>

            <AppButton title="Start Workout" onPress={()=> navigation.navigate('Home')}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight
    },
    logo: {
        width: 200,
        height: 120,
    },
    navBar: {
        flex: 1,
        alignItems: 'center',
        top: 20
    },
})

export default WelcomeScreen;