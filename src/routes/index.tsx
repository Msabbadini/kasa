import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "@/layouts/generic/layout/layout";
import {LandingPageContainer} from "@/pages/landing/landing-page.container";
import {AboutPageContainer} from "@/pages/about/about-page.container";
import {HousingContainer} from "@/pages/housing/housing.container";
import {ErrorPageContainer} from "@/pages/error/error-page.container";

const Router = () => {
    
    return (
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path={"home"} element={ <LandingPageContainer/>}/>
                    <Route path={""} element={ <LandingPageContainer/>}/>
                    <Route path={"about"} element={<AboutPageContainer/>}/>
                    <Route path={"housing/:id"} element={<HousingContainer/>}/>
                    <Route path={"*"} element={<ErrorPageContainer/>}/>
                </Route>
            </Routes>
    )
        ;
};

export default Router;