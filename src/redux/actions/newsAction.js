import {UPDATE_STATE} from "../types/newsTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";


export function updateState(data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

// News (Uz) functions
export const saveNewsUz = (values) => (dispatch, getState) => {
    if (getState().news.selectedItemUz.id){
        axios.put(API_PATH + "uz/news/" + getState().news.selectedItemUz.id, values)
            .then((res) => {
                dispatch(getNewsUz());
                dispatch(updateState({openUz: false, selectedItemUz: {}}));
                toast.success("Muvaffaqiyatli o'zgardi!");
            })
            .catch((error) => {
                toast.error(error);
            })
    } else {
        axios.post(API_PATH + "uz/news", values)
            .then((res) => {
                dispatch(getNewsUz());
                dispatch(updateState({openUz: false}));
                toast.success("Muvaffaqiyatli saqlandi!");
            })
            .catch((error) => {
                toast.error(error);
            })
    }
}

export const deleteNewsUz = () => (dispatch, getState) => {
    axios.delete(API_PATH + "uz/news/" + getState().news.selectedIndexUz)
        .then((res) => {
            dispatch(getNewsUz());
            dispatch(updateState({deleteModalUz: false, selectedIndexUz: ''}));
            toast.success("Muvaffaqiyatli o'chirildi!");
        })
        .catch((error) => {
            toast.error(error);
        })
}

export const getNewsUz = () => (dispatch) => {
    axios.get(API_PATH + "uz")
        .then((res) => {
            dispatch(updateState({newsUz: res.data.top}));
        })
        .catch((error) => {
            toast.error(error);
        })
}