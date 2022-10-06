import {LANGUAGE} from "../tools/constants";
import {uz} from './UZ'
import {ru} from './RU'
import {en} from './EN'

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
}

export const getText = (word) =>{
    return getLanguage() === "uz" ?
        uz[word] :
        getLanguage() === "ru" ?
            ru[word] :
            en[word];
}
