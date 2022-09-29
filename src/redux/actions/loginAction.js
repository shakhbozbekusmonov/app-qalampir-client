import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";


export const login = (values, navigate) => (dispatch) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    axios.post(API_PATH + "login", data)
        .then((res) => {
            localStorage.setItem(TOKEN_NAME, res.data.token_type + " " + res.data.access_token);
            navigate("/admin/menus");
            toast.success("Muvaffaqiyatli!");
        })
        .catch((error) => {
            toast.error(error);
        })
}