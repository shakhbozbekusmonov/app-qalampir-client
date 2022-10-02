import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {newsReducer} from "./newsReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    news: newsReducer,
});