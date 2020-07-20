import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

const EmployeeListScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Go to Employee details" onPress={() => navigation.navigate('Details')}/>
        </View>
    );
};

EmployeeListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: { backgroundColor: '#eb5352' },
        headerRight: () =>
            <TouchableOpacity onPress={()=> navigation.navigate('Create')} >
                <Feather name="plus" size={40} />
            </TouchableOpacity>
    }
    
};

const styles = StyleSheet.create({});

export default EmployeeListScreen;