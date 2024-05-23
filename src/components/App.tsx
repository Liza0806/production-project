import React, {Suspense, useContext, useState} from 'react';
import {Counter} from "./Counter";
import {Link, Route, Routes} from "react-router-dom";
import '../styles/index.scss'
import AboutPage from "../Pages/AboutPage/AboutPage";
import MainPage from "../Pages/MainPage/MainPage";
import {MainPageAsync} from "../Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../Pages/AboutPage/AboutPage.async";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";

const App = () => {
const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {},[theme, 'cls2, cls3'])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
             <Route path="/" element={<MainPageAsync/>}/>
             <Route path="/about" element={<AboutPageAsync />}/>
         </Routes>
            </Suspense>
        </div>
    );
};

export default App;