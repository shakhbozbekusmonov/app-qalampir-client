import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import AdminMenus from "./pages/AdminPages/AdminMenus";
import AdminNewsUz from "./pages/AdminPages/AdminNewsUz";
import AdminNewsRu from "./pages/AdminPages/AdminNewsRu";
import AdminNewsEn from "./pages/AdminPages/AdminNewsEn";

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
              <Route path="login" element={<Login/>}/>
          </Routes>
        </Router>
    );
};

export default App;