import {SET_TEMPLATES} from '../actions/actions';

let initialState = {
    templates: []
};

const TemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMPLATES:
            return {
                ...state,
                templates: action.payload
            };
        default:
            return state;
    }
};

export const setTemplatesAC = (temp) => ({
    type: SET_TEMPLATES,
    payload: temp
});

export const getTemplatesThunkCreator = () => {
    return (dispatch) => {

    }
};

export default TemplateReducer;
