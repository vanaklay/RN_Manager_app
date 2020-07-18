import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { emailChanged } from '../actions';

const LoginScreen = ({ emailChanged }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        console.log('Submit Form');
    };
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Email'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => emailChanged(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput 
                style={styles.input}
                placeholder='password'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 48,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 30,
        paddingLeft: 16
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
    }

});

const mapStateToProps = () => {};

export default connect(null, { emailChanged })(LoginScreen);