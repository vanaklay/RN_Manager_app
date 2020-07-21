import _ from 'lodash';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { stateUpdate } from '../actions';

import { Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';

const EditScreen = (props) => {
    const { navigation, stateUpdate, name, phone, shift } = props;
    const item = navigation.getParam('item');
    const onSaveButtonPress = () => {
        console.log(name + ' ' + phone + ' ' + shift);
    };
    useEffect(() => {
        stateUpdate({ prop: 'name', value: item.name});
        stateUpdate({ prop: 'phone', value: item.phone});
        stateUpdate({ prop: 'shift', value: item.shift});
    }, []);
    return (
        <View style={styles.container}>
        <EmployeeForm />
        <Button onPress={onSaveButtonPress}>Sauvegarder</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb5352'
    },
});

EditScreen.navigationOptions = {
    headerBackTitle: 'Retour',
    headerStyle: { backgroundColor: '#eb5352' }
};


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.updateForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, { stateUpdate })(EditScreen);