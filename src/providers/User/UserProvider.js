import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
    preferences: {
        theme: 'light',
        language: 'en',
    },
};

const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProvider;

export { UserContext };
