import React from 'react'
import { View, Image, StyleSheet, Text ,Button} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



function LogoLogo({navigation}) {
    setTimeout(() => {
        navigation.replace('main')
    }, 3000);
    const logoImage = "https://blog.logo.com.tr/wp-content/uploads/2021/02/Logo_Blog.jpg";
    return (
        <View style={styles.mainview}>
            <View style={styles.container}>
                <View>
                    <Image
                        source={{uri: logoImage}}
                        style={styles.logo} />
                </View>
                <View>
                    <Text style={styles.copyrightText}>Copyright © 2021 Logo Yazılım</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: ('#8C0000'),
    },
    container: {

        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 250, 
        height: 70, 
        alignSelf: 'center', 
        marginTop: 228
    },
    copyrightText:{
        marginBottom: 10, 
        color: '#ff8080'
    }

});


export default LogoLogo
