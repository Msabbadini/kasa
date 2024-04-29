import {Footer} from "@/ui/components/navigation/footer";
import {Navigation} from "@/ui/components/navigation/navigation"

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