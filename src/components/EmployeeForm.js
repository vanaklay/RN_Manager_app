import React, { Fragment } from 'react';
import { Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { stateUpdate } from '../actions';

import { CardItem, Input } from '../components/common';

const EmployeeForm = (props) => {
    const { name, phone, shift, stateUpdate } = props;
    return (
        <Fragment>
            <CardItem>
                <Input 
                    label="Nom" 
                    placeholder="Marie" 
                    value={name}
                    onChangeText={(text) => stateUpdate({prop: 'name', value: text})}
                    />
            </CardItem>
            <CardItem>
                <Input 
                    label="Tel"
                    placeholder="+336XXXXXXXX"
                    value={phone}
                    onChangeText={(text) => stateUpdate({prop: 'phone', value: text})}
                    />
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTitleStyle}>Shift</Text>
                <Picker 
                    selectedValue={shift}
                    onValueChange={(day) => stateUpdate({ prop: 'shift', value: day })}
                    >
                    <Picker.Item label="Lundi" value="Lundi" />
                    <Picker.Item label="Mardi" value="Mardi" />
                    <Picker.Item label="Mercredi" value="Mercredi" />
                    <Picker.Item label="Jeudi" value="Jeudi" />
                    <Picker.Item label="Vendredi" value="Vendredi" />
                    <Picker.Item label="Samedi" value="Samedi" />
                    <Picker.Item label="Dimanche" value="Dimanche" />
                </Picker>
            </CardItem>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    pickerTitleStyle: {
        fontSize: 30,
        alignSelf: 'center',
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.updateForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { stateUpdate })(EmployeeForm);