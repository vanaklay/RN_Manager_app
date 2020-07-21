import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmployeeDetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>{navigation.getParam('uid')}</Text>
        </View>
    );
};

EmployeeDetailsScreen.navigationOptions = {
    headerBackTitle: 'Retour',
    headerStyle: { backgroundColor: '#eb5352' }
};

const styles = StyleSheet.create({});

export default EmployeeDetailsScreen;