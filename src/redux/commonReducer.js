const ADD_REF = 'ADD_REF';

const initialState = {
    refsLink: [],
};

function commonReducer(state = initialState, action) {
    let i = 1;
    switch (action.type) {
        case ADD_REF:
            const ref = {
                id: i++,
                value: action.ref
            };
            return {
                ...state,
                refsLink: [ ...state.refs, ref],
            };
        default:
            return state;
    }
}

export default commonReducer;

export const addRefsDrycleaning = (ref) => ({type: ADD_REF, ref});
