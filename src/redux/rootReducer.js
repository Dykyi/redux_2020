import {DECREMENT, INCREMENT, ASYNC_INCREMENT, CHANGE_THEME, ENABLED_BUTTONS, DISABLED_BUTTONS} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if(action.type === INCREMENT){
        return state + 1
    } else if (action.type === DECREMENT){
        return  state - 1
    } else if (action.type === ASYNC_INCREMENT){
        return state + 1
    }

    return state
}

const initialThemeState = {
    value:'light',
    disabled: false
};

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload};
        case ENABLED_BUTTONS:
            return {...state, disabled: false};
        case DISABLED_BUTTONS:
            return {...state, disabled: true};
        default: return  state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
});
