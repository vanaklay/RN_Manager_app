import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    label: {
        paddingHorizontal: 5,
        width: 60,
        alignSelf: 'center',
        fontSize: 18,
        color: '#fff'
    },
    
    input: {
        height: 48,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginLeft: 10,
        paddingLeft: 16,
        fontSize: 18
    },
});

export {Input};