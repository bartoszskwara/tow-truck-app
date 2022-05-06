const actions = {
    SET_TOKEN: 'AUTH/SET_TOKEN',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_TOKEN: {
            if (action.payload) {
                localStorage.setItem('auth_token', action.payload);
            } else {
                localStorage.removeItem('auth_token');
            }
            return {
                ...state,
                token: action.payload,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export default reducer;

export { actions };
