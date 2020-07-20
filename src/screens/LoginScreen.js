import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Spinner } from '../components/common';

const LoginScreen = (props) => {
    const { email, 
        password, 
        error,
        loading,
        emailChanged, 
        passwordChanged, 
        loginUser } = props;
    
    const onLoginPress = () => {
        loginUser({email, password});
    };

    const renderButton = () => {
        if (loading) {
           return <Spinner />;
        } else {
            return <Text style={styles.buttonTitle}>Log in</Text>;
        }
    }

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
                onChangeText={(text) => passwordChanged(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={onLoginPress}>
                { renderButton () }  
                </TouchableOpacity>
            { error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eb5352'
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
    },
    error: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16
    }

});

const mapStateToProps = (state) => {
    return {
        email: state.authentication.email,
        password: state.authentication.password,
        error: state.authentication.error,
        loading: state.authentication.loading,
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);