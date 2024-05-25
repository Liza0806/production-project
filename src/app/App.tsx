import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AboutPage from "Pages/AboutPage/ui/AboutPage";
import MainPage from "Pages/MainPage/ui/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";



const App = () => {

    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme, 'cls2, cls3'])}>
        <Suspense fallback=''>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </Suspense>


        </div>
    );
};

export default App;