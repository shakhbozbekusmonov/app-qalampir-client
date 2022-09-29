import React from 'react';
import '../sass/admin-layout.scss';
import {RiMenu4Fill, RiNewspaperLine} from "react-icons/ri";
import {Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const AdminLayout = (props) => {
    const history = createBrowserHistory({window});
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <img src="/assets/images/user.svg" alt="Shakhbozbek Usmonov"/>

                    <div>
                        <h5 className="mb-0">Shakhbozbek Usmonov</h5>
                        <p className="mb-0">Administrator</p>
                    </div>
                </div>
                <div className="menus">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/admin/menus" className={`nav-link ${history.location.pathname === "/admin/menus" ? "active" : ""}`}> <RiMenu4Fill/> Menular</Link></li>
                        <li className="nav-item"><Link to="/admin/news/uz" className={`nav-link ${history.location.pathname === "/admin/news/uz" ? "active" : ""}`}> <RiNewspaperLine/> Yangiliklar (Uz)</Link></li>
                        <li className="nav-item"><Link to="/admin/news/ru" className={`nav-link ${history.location.pathname === "/admin/news/ru" ? "active" : ""}`}> <RiNewspaperLine/> Yangiliklar (Ru)</Link></li>
                        <li className="nav-item"><Link to="/admin/news/en" className={`nav-link ${history.location.pathname === "/admin/news/en" ? "active" : ""}`}> <RiNewspaperLine/> Yangiliklar (En)</Link></li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;