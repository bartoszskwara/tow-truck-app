const actions = {
    SET_USER_DATA: 'USER/SET_USER_DATA',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export default reducer;

export { actions };
