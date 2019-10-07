import { GET_TEMPLATES, SET_CURRENT_TEMPLATE, SET_TEMPLATES, IS_LOADED, FONT_CHANGER_TOGGLE } from '../actions/actions';

let initialState = {
    templates: [],
    currentTemplate: {},
    loading: false,
    fontChangerOpen: false,
    editText: null
};

const TemplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEMPLATES:
            return {
                ...state,
                templates: action.payload
            };
        case SET_TEMPLATES:
            let updateTemplates = state.templates.map((template, i) => {
                if (template.id === action.payload.id) {
                    template = action.payload;
                }
                return template;
            });
            return {
                ...state,
                templates: updateTemplates
            };
        case SET_CURRENT_TEMPLATE:
            return {
                ...state,
                template: action.payload
            };
        case IS_LOADED:
            return {
                ...state,
                loading: true
            };
        case FONT_CHANGER_TOGGLE:
            let toggleFontPanel = state.fontChangerOpen;
            if (state.editText === null || (!state.fontChangerOpen && state.editText !== action.payload)) {
                toggleFontPanel = true;
            }
            if (state.editText === action.payload) {
                toggleFontPanel = !state.fontChangerOpen;
            }
            return {
                ...state,
                editText: !state.fontChangerOpen ? action.payload : state.editText,
                fontChangerOpen: toggleFontPanel,
            };
        default:
            return state;
    }
};

export const isLoadedAC = () => ({
    type: IS_LOADED
});

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

export const toggleFontChangerAC = (text) => ({
    type: FONT_CHANGER_TOGGLE,
    payload: text
});

export const getTemplatesThunkCreator = () => {
    return (dispatch) => {

    }
};

export default TemplateReducer;
