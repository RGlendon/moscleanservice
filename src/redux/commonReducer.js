const OPEN_MENU = 'OPEN_MENU';

const initialState = {
    isOpenMenu: false,
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MENU:
            return {
                ...state,
                isOpenMenu: action.status,
            };
        default:
            return state;
    }
}

export default commonReducer;

export const toggleMenu = (status) => ({type: OPEN_MENU, status});
