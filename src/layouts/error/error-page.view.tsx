import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/ui_toolkit/typography/typography";
import {NavLink} from "react-router-dom";
import useWindowDimension from "@/utils/useWindowDimension";

export const ErrorPageView =()=>{
    const {width} = useWindowDimension()
    return (
        <Container>
            <div className={"error-content"}>
                <Typography align={'center'} variant={width >769 ?"display":"display-mobile"} component={"h1"}>404</Typography>
                <Typography align={'center'} variant={width > 769 ?"h2":"body-lg"} component={"h2"}>Oups! La page que vous demandez n'existe pas.</Typography>
                <NavLink to={"/home"} className={"error-link"}>
                    <Typography variant={"body-lg"}>Retourner sur la page d’accueil</Typography>
                </NavLink>
            </div>
        </Container>
    )
}