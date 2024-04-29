import {Footer} from "@/components/navigation/footer";
import {Navigation} from "@/components/navigation/navigation"

import {Outlet} from "react-router";

const Layout = ()=>{


    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    )

}
export default Layout