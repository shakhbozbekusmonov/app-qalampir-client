import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {ImYoutube2} from "react-icons/im";
import {getLanguage, getText} from "../../locales";
import {LANGUAGE} from "../../tools/constants";

const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true);
        let loc = "http://localhost:3000/"
        window.location.replace(loc + e.target.value);
    }

    return (
        <header className="header">
            <div className="header-top d-flex justify-content-between align-items-center border-bottom">
                <div className="text-secondary d-flex align-items-center">
                    <img src="https://cdn.beta.qalampir.uz/assets/dbca5ed6/img/svg/calendar.svg" alt="Calendar"/>
                    <span className="ml-1"> {d.getDate() + "/" + month + "/" + d.getFullYear()} |</span>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">{getText("sayt")}</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">{getText("biz")}</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">{getText("al")}</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">{getText("ar")}</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">{getText("mur")}</a></li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <select className="main_language text-danger form-control" onChange={changeLanguage}>
                        <option value="uz" selected={getLanguage() === "uz"}>O'z</option>
                        <option value="ru" selected={getLanguage() === "ru"}>Ru</option>
                        <option value="en" selected={getLanguage() === "en"}>En</option>
                    </select>

                    <div className="d-flex align-items-center">
                        <FaFacebookF className="ml-2 text-secondary"/>
                        <FaTelegramPlane className="ml-2 text-secondary"/>
                        <AiFillInstagram className="ml-2 text-secondary"/>
                        <ImYoutube2 className="ml-2 text-secondary"/>
                    </div>
                </div>
            </div>

            <div className="header-main d-flex align-items-center">
                <div className="navbar-brand">
                    <Link to="/"><img src="/assets/images/logo_n.png" className="logo" alt="Qalampir"/></Link>
                </div>

                <ul className="nav">
                    <li className="nav-item"><Link to="" className="nav-link">{getText("jam")} </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">{getText("ol")} </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">{getText("mad")} </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">{getText("in")} </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">{getText("foy")} </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">{getText("sport")} </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">{getText("tahlil")} </Link></li>
                </ul>

                <input type="search" name="search" className="form-control" style={{width: "45px"}} />
            </div>
        </header>
    );
};

export default Header;