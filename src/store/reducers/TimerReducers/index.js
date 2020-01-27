import {SET_COUNT} from "../../actions";

export const initialState = {
    timer: {
        name: '',
        count: 0,
        status: 'stop'
    }
}

export function defaultReducers(state = initialState, action) {

    const timer = {...state.timer};

    switch (action.type) {

        case SET_COUNT:

            return {
                ...state,
                ...{
                    timer: {...timer, ...action.data}
                }
            }
        default:
            return state
    }
}