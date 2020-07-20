import React from 'react';
import { View, StyleSheet } from 'react-native';

import { firebase } from '../services/firebase';

import { Button, Spinner } from '../components/common';

const AccountScreen = () => {
    return (
        <View>
            <Button onPress={() => console.log('Log out button press !')}>Log out
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;