import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
});