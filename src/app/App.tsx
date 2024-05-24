import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AboutPage from "Pages/AboutPage/ui/AboutPage";
import MainPage from "Pages/MainPage/ui/MainPage";
import {AppRouter} from "app/providers/router";



const App = () => {
const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {},[theme, 'cls2, cls3'])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
<AppRouter/>
        </div>
    );
};

export default App;