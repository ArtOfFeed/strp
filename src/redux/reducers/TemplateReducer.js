import { GET_TEMPLATES, SET_CURRENT_TEMPLATE, SET_TEMPLATES } from '../actions/actions';

let initialState = {
    templates: [],
    currentTemplate: {}
};

const TemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMPLATES:
            return {
                ...state,
                templates: action.payload
            };
        case SET_TEMPLATES:
            let updateTemplates = state.templates.filter((template) => {
                if (template.id === action.payload.id) {
                    template = action.payload
                }
                return template;
            })
            return {
                ...state,
                templates: updateTemplates 
            };
        case SET_CURRENT_TEMPLATE:
            return {
                ...state,
                template: action.payload
            }
        default:
            return state;
    }
};

export const getTemplatesAC = (temps) => ({
    type: GET_TEMPLATES,
    payload: temps
});

export const setTemplatesAC = (temp) => ({
    type: SET_TEMPLATES,
    payload: temp
});

export const setCurrentTemplateAC = (temp) => ({
    type: SET_CURRENT_TEMPLATE,
    payload: temp
});

export const getTemplatesThunkCreator = () => {
    return (dispatch) => {

    }
};

export default TemplateReducer;
