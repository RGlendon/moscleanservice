const OPEN_MENU = 'OPEN_MENU';
const UPDATE_ADDINFO = 'UPDATE_ADDINFO';

const initialState = {
    isOpenMenu: false,
    addInfo: {}
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MENU:
            return {
                ...state,
                isOpenMenu: action.status,
            };
        case UPDATE_ADDINFO:
            return {
                ...state,
                addInfo: action.data,
            };
        default:
            return state;
    }
}

export default commonReducer;

export const toggleMenu = (status) => ({type: OPEN_MENU, status});

export const updateAddInfo = (data) => ({type: UPDATE_ADDINFO, data});
