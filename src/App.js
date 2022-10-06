import React from 'react';
import './sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import AdminMenus from "./pages/AdminPages/AdminMenus";
import AdminNewsUz from "./pages/AdminPages/AdminNewsUz";
import AdminNewsRu from "./pages/AdminPages/AdminNewsRu";
import AdminNewsEn from "./pages/AdminPages/AdminNewsEn";
import Uz from "./pages/Language/Uz";
import Ru from "./pages/Language/Ru";
import En from "./pages/Language/En";

const App = () => {
    return (
        <Router>
          <Routes>
              <Route element={<PrivateRoute/>}>
                  <Route path="/" index element={<Home/>}/>
                  <Route path="admin/menus" element={<AdminMenus/>}/>
                  <Route path="admin/news/uz" element={<AdminNewsUz/>}/>
                  <Route path="admin/news/ru" element={<AdminNewsRu/>}/>
                  <Route path="admin/news/en" element={<AdminNewsEn/>}/>
              </Route>
              <Route path="uz" element={<Uz/>}/>
              <Route path="ru" element={<Ru/>}/>
              <Route path="en" element={<En/>}/>
              <Route path="login" element={<Login/>}/>
          </Routes>
        </Router>
    );
};

export default App;