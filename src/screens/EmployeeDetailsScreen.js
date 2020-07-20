import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmployeeDetailsScreen = () => {
    return (
        <View>
            <Text>Employee Details Screen</Text>
        </View>
    );
};

EmployeeDetailsScreen.navigationOptions = {
    headerBackTitle: 'Back to List',
    headerStyle: { backgroundColor: '#eb5352' }
};

const styles = StyleSheet.create({});

export default EmployeeDetailsScreen;