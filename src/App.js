import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <Router>
          <Routes>
              <Route path="/" index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
          </Routes>
        </Router>
    );
};

export default App;