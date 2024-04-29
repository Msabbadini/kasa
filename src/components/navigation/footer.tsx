// @ts-ignore
import logo from "../../../../public/assets/logo-footer.png"
import {Typography} from "@/components/typography/typography";
import useWindowDimension from "@/utils/useWindowDimension";
import {NavLink} from "react-router-dom";
export  const Footer =()=>{
const {width}= useWindowDimension()
    return(
        <footer>
            <NavLink to={"/home"}>
                <img src={logo} alt={"Kasa - agence de location d'appartements entre particuliers"} />
            </NavLink>

            <Typography theme={"secondary"} component={'p'} variant={width > 769 ?"lead":"body-xs"}>© 2020 Kasa. All rights reserved</Typography>
        </footer>
    )
}