import React from 'react';
import { ImageBackground, StyleSheet, View, Image, } from 'react-native';

import colors from '../config/colors'
import AppText from '../components/AppText'
import AppTitleText from '../components/AppTitleText'

const image = { uri: "https://images.unsplash.com/photo-1580051745102-d33599f86c69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=608&q=80"}

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={image}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/tt-logo.png")}/>

            </View>
            <View style={styles.loginButton}>
                <AppTitleText>Start Workout</AppTitleText>
            </View>
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
    },  
    loginButton: {
        width: "80%",
        height: 70,
        backgroundColor: colors.primary,
        bottom: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.secondary,
        shadowOffset: { width: 4, height: 4},
        shadowOpacity: 1,
        borderRadius: 6,
        elevation: 20
    },
    loginButtonText: {
        color: "black",
        fontWeight: "bold",
    }
})

export default WelcomeScreen;