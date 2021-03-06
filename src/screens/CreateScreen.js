import React from 'react';
import { View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { stateSave } from '../actions';

import { Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';

const CreateScreen = (props) => {
    const { name, phone, shift, stateSave } = props;

    const onSaveButtonPress = () => {
        stateSave({ name, phone, shift: shift || 'Lundi' });
    };

    return (
        <View style={styles.container}>
        <EmployeeForm {...props} />
        <Button onPress={onSaveButtonPress}>Sauvegarder</Button>
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
    headerBackTitle: 'Retour',
    headerStyle: { backgroundColor: '#eb5352' }
};


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.updateForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, { stateSave })(CreateScreen);