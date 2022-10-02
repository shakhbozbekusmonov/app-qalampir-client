import {UPDATE_STATE} from "../types/newsTypes";


const initialState = {
    openUz: false,
    newsUz: [],
}

export const newsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}