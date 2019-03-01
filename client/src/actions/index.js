import { SIGN_IN, SIGN_OUT } from './types';


export const signIn = ( userId ) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    console.log('sanju');
    return {
        type: SIGN_OUT
    };
};