import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {ImYoutube2} from "react-icons/im";

const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];
    return (
        <header className="header">
            <div className="header-top d-flex justify-content-between align-items-center border-bottom">
                <div className="text-secondary d-flex align-items-center">
                    <img src="https://cdn.beta.qalampir.uz/assets/dbca5ed6/img/svg/calendar.svg" alt="Calendar"/>
                    <span className="ml-1"> {d.getDate() + "/" + month + "/" + d.getFullYear()} |</span>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Sayt haqida</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Biznes</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Aloqa</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Arxiv</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Murojaatlar</a></li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <select className="main_language text-danger form-control">
                        <option value="uz">O'z</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
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
                    <li className="nav-item"><Link to="" className="nav-link">Jamiyat </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Olam </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Madaniyat-san'at </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Intervyu </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Foydali </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Sport </Link></li>
                    <li className="nav-item"><Link to="" className="nav-link">Tahlil </Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;