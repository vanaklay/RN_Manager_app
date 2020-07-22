import { STATE_UPDATE, STATE_SAVE, STATE_EDIT_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STATE_UPDATE:
            // action.payload === { prop: 'name', value: 'angela' }
            // [action.payload.prop] === key interpolation 
            return { ...state, [action.payload.prop]: action.payload.value };
        case STATE_SAVE:
            return INITIAL_STATE;
        case STATE_EDIT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};