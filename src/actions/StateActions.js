import { STATE_UPDATE, STATE_SAVE, DATA_FETCH_SUCCESS } from './types';
import { navigate } from '../navigationRef';

import { firebase } from '../services/firebase';

export const stateUpdate = ({ prop, value }) => {
    return {
        type: STATE_UPDATE,
        payload: { prop, value }
    };
};

export const stateSave = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({type: STATE_SAVE});
            navigate('Liste');
        });
    };
};

// How to fetch data from firebase with Redux Thunk
export const dataFetch = () => {
    const { currentUser } = firebase.auth();
    // Because it's asynchronous action, 
    // we need to return a dispatch function manually.
    return (dispatch) => {
        // Because we have create a ref when we store data on db,
        // we can make another ref to the same location but this time
        // we want to fetch data.
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', (snapshot) => {
            // Anytime any data comes across from this ref, we get any 
            // value call this function with an object to describe the data 
            // (snapshot).
            // If we want to get the employee, we need snapshot.val().
            dispatch({ type: DATA_FETCH_SUCCESS, payload: snapshot.val() });
        });

    };
};