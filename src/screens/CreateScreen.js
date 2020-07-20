import React from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';

import { Input, CardItem, Button } from '../components/common';

const CreateScreen = () => {
    return (
        <View style={styles.container}>
        <CardItem>
            <Input label="name :"/>
        </CardItem>
        <CardItem>
            <Input label="name :"/>
        </CardItem>
        <Button>Save</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb5352'
    }
});

CreateScreen.navigationOptions = {
    headerBackTitle: 'Back to List',
    headerStyle: { backgroundColor: '#eb5352' }
};

export default CreateScreen;