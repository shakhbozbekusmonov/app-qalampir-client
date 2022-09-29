import { Navigate, Outlet } from "react-router-dom";
import {TOKEN_NAME} from "../tools/constants";

const PrivateRoute = () => {
    return localStorage.getItem(TOKEN_NAME) ? <Outlet/> : <Navigate to="/"/>;
}

export default PrivateRoute;