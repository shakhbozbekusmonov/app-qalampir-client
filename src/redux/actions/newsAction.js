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
export const saveNewsUz = (values) => (dispatch) => {
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

export const getNewsUz = () => (dispatch) => {
    axios.get(API_PATH + "uz")
        .then((res) => {
            dispatch(updateState({newsUz: res.data.top}));
        })
        .catch((error) => {
            toast.error(error);
        })
}