import axios from "axios";
import {API_PATH} from "../../tools/constants";


export const login = (values) => (dispatch) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    axios.post(API_PATH + "login", data)
        .then((res) => {
            console.log(res);
        })
}