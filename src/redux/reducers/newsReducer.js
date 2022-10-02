import {UPDATE_STATE} from "../types/newsTypes";


const initialState = {
    openUz: false,
    openRu: false,
    openEn: false,
    newsUz: [],
    newsRu: [],
    newsEn: [],
    deleteModalUz: false,
    deleteModalRu: false,
    deleteModalEn: false,
    selectedIndexUz: '',
    selectedIndexRu: '',
    selectedIndexEn: '',
    selectedItemUz: {},
    selectedItemRu: {},
    selectedItemEn: {},
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