import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Communications from 'react-native-communications';

import { connect } from 'react-redux';
import { stateUpdate, stateEdit, stateDelete } from '../actions';

import { Button, Confirm } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';

const EditScreen = (props) => {
    const { navigation, stateUpdate, name, phone, shift, stateEdit, stateDelete } = props;
    const item = navigation.getParam('item');
    const [showModal, setShowModal] = useState(false);
    const onSaveButtonPress = () => {
        stateEdit({ name, phone, shift, uid: item.uid });
    };
    const onTextPress = () => {
        Communications.text(phone, `Votre prochain jour de travail : ${shift}`);
    };
    const onDeleteButtonPress = () => {
        setShowModal(true);
    };
    const onAccept = () => {
        stateDelete({ uid: item.uid });
        setShowModal(false);
    };
    const onDecline = () => setShowModal(false);
    useEffect(() => {
        stateUpdate({ prop: 'name', value: item.name});
        stateUpdate({ prop: 'phone', value: item.phone});
        stateUpdate({ prop: 'shift', value: item.shift});
    }, []);
    return (
        <View style={styles.container}>
        <EmployeeForm />
        <Button onPress={onSaveButtonPress}>Sauvegarder</Button>
        <Button onPress={onTextPress}>Envoyer un message</Button>
        <Button onPress={onDeleteButtonPress}>Effacer ce contact</Button>
        <Confirm 
            visible={showModal}
            onAccept={onAccept}
            onDecline={onDecline}
            >Etes-vous sur d'effacer ce contact ?</Confirm>
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
export default connect(mapStateToProps, { stateUpdate, stateEdit, stateDelete })(EditScreen);