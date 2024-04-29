import {NavLink} from "react-router-dom";
import {Typography} from "@/ui/ui_toolkit/typography/typography";
import clsx from "clsx";

interface Props {
    nameCard : string,
    imgCard? :any,
    idCard: string
}
export const Card = ({nameCard,imgCard,idCard}:Props)=>{

    return(
        <NavLink to={`../ficheImmobilier/${idCard}`} className={clsx('card',
            imgCard?"":'default-card')}>
            {imgCard && <img src={imgCard} alt={"Image du bien immobilier"}/>}
            <Typography className={"title-card"} variant={"body-lg"} theme={'secondary'} component={'h3'}>{nameCard}</Typography>
        </NavLink>
    )
}