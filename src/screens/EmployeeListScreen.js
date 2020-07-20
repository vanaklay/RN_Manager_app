import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const EmployeeListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Employee List Screen</Text>
            <Button title="Go to Employee details" onPress={() => navigation.navigate('EmployeeDetails')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default EmployeeListScreen;