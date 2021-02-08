import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

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
                <Text style={styles.loginButtonText}>Start Workout</Text>
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
        top: 500,
        position: "absolute", 
    },
    logo: {
        width: 300,
        height: 200
    },  
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fe6900",
        bottom: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 26
    }
})

export default WelcomeScreen;