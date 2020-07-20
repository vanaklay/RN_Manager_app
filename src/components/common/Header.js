import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = ({ headerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 120,
        paddingBottom: 20
    },
    title: {
        fontSize: 20
    }
});

export {Header};