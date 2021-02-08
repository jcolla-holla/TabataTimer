import React from 'react';
import { ImageBackground, StyleSheet, View, Image, } from 'react-native';

import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

const image = { uri: "https://images.unsplash.com/photo-1580051745102-d33599f86c69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=608&q=80"}

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={2}
            style={styles.background}
            source={image}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/tt-logo.png")}/>
            </View>

            <AppButton title="Start Workout" onPress={()=>console.log('tapped')}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        top: 480,
        position: "absolute", 
    },
    logo: {
        width: 300,
        height: 200
    }
})

export default WelcomeScreen;