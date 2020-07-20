import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = ({ children }) => {
    return (<View style={styles.container}>
        {children}
        </View>);
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#788eec',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
});

export {CardItem};