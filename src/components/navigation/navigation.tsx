import {Container} from "@/ui/components/container/container";
// @ts-ignore
import logoNavigation from "../../../../public/assets/logo-navigation.png";
import { Typography } from "@/components/typography/typography";
import {ActiveLink} from "@/ui/components/navigation/active_link";
import useWindowDimension from "@/utils/useWindowDimension";
import {NavLink} from "react-router-dom";
export const Navigation =()=>{
    const {width} = useWindowDimension()
return(
    <div>
        <Container>
           <header>
              <NavLink to={"/home"}>
                  <img src={logoNavigation} alt={'Logo Kasa'}/>
              </NavLink>

               <div >
                   <Typography
                       variant={width > 769 ?"lead":"body-xs"}
                       component="div"
                       className="menu"
                       align={'right'}
                   >
                       <ActiveLink href="/home" nameRoute={"Accueil"}/>
                       <ActiveLink href="/a_propos" nameRoute={"A propos"}/>
                   </Typography>
               </div>
           </header>
        </Container>
    </div>
)
}