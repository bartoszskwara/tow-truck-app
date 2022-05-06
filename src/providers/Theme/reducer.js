const actions = {
    TOGGLE_THEME: 'THEME/TOGGLE_THEME',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.TOGGLE_THEME: {
            return {
                ...state,
                mode: state.mode === 'dark' ? 'light' : 'dark',
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export default reducer;

export { actions };
