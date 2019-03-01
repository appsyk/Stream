import { combineReducers } from 'redux';
import { reducer as formReducer } from 'react-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer
});