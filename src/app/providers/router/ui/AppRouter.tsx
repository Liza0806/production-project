import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "Pages/MainPage/ui/MainPage";
import AboutPage from "Pages/AboutPage/ui/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    ></Route>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;