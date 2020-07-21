import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';

import { firebase } from '../services/firebase';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const onLogoutPress = () => {
        firebase.auth().signOut();
    };
    return (
        <SafeAreaView style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={onLogoutPress}>
            <Text style={styles.buttonTitle}>Déconnexion</Text> 
        </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eb5352'
    },
    button: {
        backgroundColor: '#788eec',
        marginHorizontal: 30,
        marginTop: 20,
        height: 48,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={20} />,
    tabBarStyle: {
        backgroundColor: '#eb5352'
    }
};

export default AccountScreen;