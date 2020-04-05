import {CHANGE_THEME, DECREMENT, DISABLED_BUTTONS, ENABLED_BUTTONS, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function enableButtons() {
    return {
        type: ENABLED_BUTTONS
    }
}

export function disableButtons() {
    return {
        type: DISABLED_BUTTONS
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons());
        setTimeout(()=> {
            dispatch(increment());
            dispatch(enableButtons());
        }, 1500)
    }
}
