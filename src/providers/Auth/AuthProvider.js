import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
    token: localStorage.getItem('auth_token'),
};

const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;

export { AuthContext };
